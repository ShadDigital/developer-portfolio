import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type Application } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Info, Star, HardDrive, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface AppCardProps {
  application: Application;
  index: number;
}

export default function AppCard({ application, index }: AppCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const downloadMutation = useMutation({
    mutationFn: async (appId: string) => {
      const response = await apiRequest("POST", `/api/applications/${appId}/download`);
      return response.json();
    },
    onSuccess: (data) => {
      // Invalidate and refetch applications to update download count
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
      queryClient.invalidateQueries({ queryKey: ["/api/stats"] });
      
      toast({
        title: "Download Started",
        description: `${application.name} download has been initiated.`,
      });
      
      // In a real app, you would redirect to the download URL
      // window.open(data.downloadUrl, '_blank');
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
    downloadMutation.mutate(application.id);
  };

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}k`;
    }
    return downloads.toString();
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img 
        src={application.imageUrl}
        alt={`${application.name} interface`}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900">{application.name}</h3>
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-600 text-xs font-semibold">
            {application.version}
          </Badge>
        </div>
        
        <p className="text-slate-600 mb-4 leading-relaxed">
          {application.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-slate-500">
            <span className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              {formatDownloads(application.downloads)}
            </span>
            <span className="flex items-center">
              <Star className="h-4 w-4 mr-1" />
              {application.rating}
            </span>
            <span className="flex items-center">
              <HardDrive className="h-4 w-4 mr-1" />
              {application.fileSize}
            </span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            onClick={handleDownload}
            disabled={isDownloading || downloadMutation.isPending}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            {isDownloading || downloadMutation.isPending ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            Download
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
