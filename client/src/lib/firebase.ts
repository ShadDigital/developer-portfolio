import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, increment, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase only if config is available
let db: ReturnType<typeof getFirestore> | null = null;

try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (error) {
  console.warn('Firebase not configured:', error);
}

// Track download function
export const trackDownload = async (appName: string): Promise<number> => {
  if (!db) {
    console.warn('Firebase not configured, returning mock count');
    return Math.floor(Math.random() * 100) + 1; // Return a mock count for demo
  }
  
  try {
    const docRef = doc(db, 'downloads', appName);
    
    // Check if document exists
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      // Create document with initial count
      await setDoc(docRef, { count: 1 });
      return 1;
    } else {
      // Increment existing count
      await updateDoc(docRef, {
        count: increment(1)
      });
      
      // Get updated count
      const updatedDoc = await getDoc(docRef);
      return updatedDoc.data()?.count || 1;
    }
  } catch (error) {
    console.error('Error tracking download:', error);
    return 0;
  }
};

// Get download count function
export const getDownloadCount = async (appName: string): Promise<number> => {
  if (!db) {
    console.warn('Firebase not configured, returning mock count');
    return Math.floor(Math.random() * 50); // Return a mock count for demo
  }
  
  try {
    const docRef = doc(db, 'downloads', appName);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()?.count || 0;
    } else {
      return 0;
    }
  } catch (error) {
    console.error('Error getting download count:', error);
    return 0;
  }
};

// Get total downloads across all apps
export const getTotalDownloads = async (): Promise<number> => {
  // For simplicity, we'll just return the Calculator count for now
  // You can expand this to sum all apps later
  return await getDownloadCount('Calculator');
};