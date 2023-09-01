import Navbar from "../components/modules/home/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto bg-gray-light">
      <Navbar blog />
      {children}
    </main>
  );
}
