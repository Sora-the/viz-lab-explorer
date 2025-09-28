import { ArrowLeft, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function Arrays() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Array Visualizer
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore and visualize array operations including insertion, deletion, searching, and sorting algorithms.
          </p>
        </div>

        {/* Visualization Area */}
        <Card className="bg-card shadow-card border-border p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Array Operations</h2>
            <div className="flex gap-3">
              <Button variant="secondary" className="flex items-center gap-2">
                <Play size={16} />
                Start
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <RotateCcw size={16} />
                Reset
              </Button>
            </div>
          </div>

          {/* Placeholder for array visualization */}
          <div className="bg-muted/10 border-2 border-dashed border-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4 text-muted-foreground">📊</div>
              <p className="text-muted-foreground">Array visualization will appear here</p>
              <p className="text-sm text-muted-foreground mt-2">Implementation coming soon...</p>
            </div>
          </div>
        </Card>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card shadow-card border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Basic Operations</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">Insert Element</Button>
              <Button variant="outline" className="w-full justify-start">Delete Element</Button>
              <Button variant="outline" className="w-full justify-start">Search Element</Button>
            </div>
          </Card>

          <Card className="bg-card shadow-card border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Sorting Algorithms</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">Bubble Sort</Button>
              <Button variant="outline" className="w-full justify-start">Quick Sort</Button>
              <Button variant="outline" className="w-full justify-start">Merge Sort</Button>
            </div>
          </Card>

          <Card className="bg-card shadow-card border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Array Properties</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Length: <span className="text-primary">10</span></div>
              <div>Size: <span className="text-primary">40 bytes</span></div>
              <div>Type: <span className="text-primary">Integer</span></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}