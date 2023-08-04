import Navbar from '@/Organism/Navbar';
import Blogs from '@/design-system/Organism/Blogs';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between max-w-5xl min-h-screen py-12 mx-auto">
      <div className="z-10 items-center justify-between w-full font-mono">
        <Blogs />
      </div>
    </main>
  );
}
