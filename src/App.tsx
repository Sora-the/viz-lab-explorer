import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Data Structures
import Arrays from "./pages/DataStructures/Arrays";
import Stacks from "./pages/DataStructures/Stacks";
import Queues from "./pages/DataStructures/Queues";
import LinkedLists from "./pages/DataStructures/LinkedLists";
import Trees from "./pages/DataStructures/Trees";
import Graphs from "./pages/DataStructures/Graphs";
import Hashing from "./pages/DataStructures/Hashing";

// Algorithms
import BubbleSort from "./pages/Algorithms/Sorting/BubbleSort";
import MergeSort from "./pages/Algorithms/Sorting/MergeSort";
import BinarySearch from "./pages/Algorithms/Searching/BinarySearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Data Structures Routes */}
          <Route path="/data-structures/arrays" element={<Arrays />} />
          <Route path="/data-structures/stacks" element={<Stacks />} />
          <Route path="/data-structures/queues" element={<Queues />} />
          <Route path="/data-structures/linked-lists" element={<LinkedLists />} />
          <Route path="/data-structures/trees" element={<Trees />} />
          <Route path="/data-structures/graphs" element={<Graphs />} />
          <Route path="/data-structures/hashing" element={<Hashing />} />
          
          {/* Algorithm Routes */}
          <Route path="/algorithms/sorting/bubble-sort" element={<BubbleSort />} />
          <Route path="/algorithms/sorting/merge-sort" element={<MergeSort />} />
          <Route path="/algorithms/searching/binary-search" element={<BinarySearch />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
