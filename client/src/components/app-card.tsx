import { useState, useEffect } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { type Application } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackDownload, getDownloadCount } from "@/lib/firebase";

interface AppCardProps {
  application: Application;
  index: number;
}

export default function AppCard({ application, index }: AppCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Get current download count from Firebase
  const { data: downloadCount = 0 } = useQuery({
    queryKey: ['downloadCount', application.name],
    queryFn: () => getDownloadCount(application.name),
  });

  const downloadMutation = useMutation({
    mutationFn: async (appName: string) => {
      const newCount = await trackDownload(appName);
      return { downloadUrl: application.downloadUrl, count: newCount };
    },
    onSuccess: (data) => {
      // Invalidate and refetch download count
      queryClient.invalidateQueries({ queryKey: ['downloadCount', application.name] });
      
      toast({
        title: "Download Started",
        description: `${application.name} download has been initiated.`,
      });
      
      // Trigger actual file download
      window.open(data.downloadUrl, '_blank');
    },
    onError: () => {
      toast({
        title: "Download Failed",
        description: "There was an error starting your download. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsDownloading(false);
    },
  });

  const handleDownload = async () => {
    setIsDownloading(true);
    downloadMutation.mutate(application.name);
  };

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}k`;
    }
    return downloads.toString();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
      <img 
        src={application.imageUrl}
        alt={`${application.name} interface`}
        className="w-full h-32 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{application.name}</h3>
        <p className="text-sm text-slate-600 mb-3">
          {application.description.length > 80 
            ? `${application.description.substring(0, 80)}...` 
            : application.description}
        </p>
        
        <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
          <span>{formatDownloads(downloadCount)} downloads</span>
          <span>{application.fileSize}</span>
        </div>
        
        <Button 
          onClick={handleDownload}
          disabled={isDownloading || downloadMutation.isPending}
          className="w-full bg-slate-900 text-white hover:bg-slate-800"
          size="sm"
        >
          {isDownloading || downloadMutation.isPending ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Download className="h-4 w-4 mr-2" />
          )}
          Download
        </Button>
      </div>
    </div>
  );
}
