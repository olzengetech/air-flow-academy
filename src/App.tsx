import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Module3D from "./pages/Module3D";
import ModuleAssembly from "./pages/ModuleAssembly";
import ModuleCleaning from "./pages/ModuleCleaning";
import ModuleLessons from "./pages/ModuleLessons";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modulo/3d" element={<Module3D />} />
          <Route path="/modulo/montagem" element={<ModuleAssembly />} />
          <Route path="/modulo/limpeza" element={<ModuleCleaning />} />
          <Route path="/modulo/aulas" element={<ModuleLessons />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
