import { ArrowLeft, ArrowRight, ArrowUp, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function Queues() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-6xl mx-auto">
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
            Queue Visualizer
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn FIFO (First In, First Out) principle with interactive queue operations.
          </p>
        </div>

        <Card className="bg-card shadow-card border-border p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Queue Operations</h2>
            <div className="flex gap-3">
              <Button variant="secondary" className="flex items-center gap-2">
                <ArrowRight size={16} />
                Enqueue
              </Button>
              <Button variant="destructive" className="flex items-center gap-2">
                <ArrowUp size={16} />
                Dequeue
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <RotateCcw size={16} />
                Clear
              </Button>
            </div>
          </div>

          <div className="bg-muted/10 border-2 border-dashed border-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4 text-muted-foreground">🚶‍♂️➡️🚶‍♀️</div>
              <p className="text-muted-foreground">Queue visualization will appear here</p>
              <p className="text-sm text-muted-foreground mt-2">Implementation coming soon...</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}