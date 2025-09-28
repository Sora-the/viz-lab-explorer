import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface NavigationItem {
  name: string;
  path: string;
  description?: string;
}

interface NavigationCardProps {
  title: string;
  items: NavigationItem[];
  icon: React.ReactNode;
  gradient: string;
}

export function NavigationCard({ title, items, icon, gradient }: NavigationCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <Card className={`bg-card shadow-card hover:shadow-lg transition-all duration-normal border-border ${gradient}`}>
      <div className="p-6">
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left group"
        >
          <div className="flex items-center gap-4">
            <div className="text-primary text-2xl">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-fast">
              {title}
            </h3>
          </div>
          
          <div className="text-muted-foreground group-hover:text-primary transition-colors duration-fast">
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="mt-6 space-y-3 animate-slide-down">
            {items.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => handleItemClick(item.path)}
                className="w-full justify-start text-left p-4 h-auto hover:bg-muted/20 hover:text-primary border border-transparent hover:border-primary/20 transition-all duration-fast group"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="font-medium text-base">{item.name}</span>
                  {item.description && (
                    <span className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                      {item.description}
                    </span>
                  )}
                </div>
              </Button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}