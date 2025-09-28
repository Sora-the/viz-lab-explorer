import { Database, Cpu, TreePine, Network, Hash, BarChart3, Search, GitBranch } from 'lucide-react';
import { NavigationCard } from '@/components/NavigationCard';

const Index = () => {
  const dataStructures = [
    { name: 'Arrays', path: '/data-structures/arrays', description: 'Sequential data storage' },
    { name: 'Stacks', path: '/data-structures/stacks', description: 'LIFO data structure' },
    { name: 'Queues', path: '/data-structures/queues', description: 'FIFO data structure' },
    { name: 'Linked Lists', path: '/data-structures/linked-lists', description: 'Dynamic node-based lists' },
    { name: 'Trees', path: '/data-structures/trees', description: 'Hierarchical data structure' },
    { name: 'Graphs', path: '/data-structures/graphs', description: 'Connected nodes and edges' },
    { name: 'Hashing', path: '/data-structures/hashing', description: 'Key-value fast access' }
  ];

  const sortingAlgorithms = [
    { name: 'Bubble Sort', path: '/algorithms/sorting/bubble-sort', description: 'Simple comparison-based sort' },
    { name: 'Merge Sort', path: '/algorithms/sorting/merge-sort', description: 'Divide and conquer approach' },
    { name: 'Quick Sort', path: '/algorithms/sorting/quick-sort', description: 'Efficient pivot-based sort' },
    { name: 'Heap Sort', path: '/algorithms/sorting/heap-sort', description: 'Binary heap based sorting' },
    { name: 'Insertion Sort', path: '/algorithms/sorting/insertion-sort', description: 'Building sorted array' }
  ];

  const searchingAlgorithms = [
    { name: 'Linear Search', path: '/algorithms/searching/linear-search', description: 'Sequential element search' },
    { name: 'Binary Search', path: '/algorithms/searching/binary-search', description: 'Efficient sorted array search' },
    { name: 'Depth-First Search', path: '/algorithms/searching/dfs', description: 'Graph traversal algorithm' },
    { name: 'Breadth-First Search', path: '/algorithms/searching/bfs', description: 'Level-wise graph traversal' }
  ];

  const pathfindingAlgorithms = [
    { name: 'Dijkstra\'s Algorithm', path: '/algorithms/pathfinding/dijkstra', description: 'Shortest path algorithm' },
    { name: 'A* Algorithm', path: '/algorithms/pathfinding/astar', description: 'Heuristic pathfinding' },
    { name: 'Bellman-Ford', path: '/algorithms/pathfinding/bellman-ford', description: 'Negative weight handling' },
    { name: 'Floyd-Warshall', path: '/algorithms/pathfinding/floyd-warshall', description: 'All pairs shortest path' }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-background/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            AlgoViz Studio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Interactive Data Structures & Algorithms Visualization Platform
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in">
            Master computer science fundamentals through beautiful, interactive visualizations. 
            Explore data structures and algorithms with step-by-step animations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Data Structures Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Data Structures</h2>
            <p className="text-muted-foreground text-lg">
              Understand how data is organized and stored in computer memory
            </p>
          </div>
          
          <NavigationCard
            title="Data Structures"
            items={dataStructures}
            icon={<Database />}
            gradient="hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5"
          />
        </div>

        {/* Algorithms Section */}
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Algorithms</h2>
            <p className="text-muted-foreground text-lg">
              Learn step-by-step problem-solving techniques and their implementations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NavigationCard
              title="Sorting Algorithms"
              items={sortingAlgorithms}
              icon={<BarChart3 />}
              gradient="hover:bg-gradient-to-br hover:from-secondary/5 hover:to-accent/5"
            />

            <NavigationCard
              title="Searching Algorithms"
              items={searchingAlgorithms}
              icon={<Search />}
              gradient="hover:bg-gradient-to-br hover:from-accent/5 hover:to-primary/5"
            />
          </div>

          <NavigationCard
            title="Pathfinding Algorithms"
            items={pathfindingAlgorithms}
            icon={<GitBranch />}
            gradient="hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5"
          />
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Learning</h3>
            <p className="text-muted-foreground text-sm">
              Step through algorithms with visual feedback and controls
            </p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Visualization</h3>
            <p className="text-muted-foreground text-sm">
              Watch algorithms execute with smooth animations
            </p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Educational Focus</h3>
            <p className="text-muted-foreground text-sm">
              Perfect for students, teachers, and coding enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
