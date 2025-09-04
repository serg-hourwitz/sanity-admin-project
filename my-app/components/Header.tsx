interface HeaderProps {
  title: string;
}

export const Header: React.FC.<HeaderProps> = ({title}) => {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-3xl">{title}</h1>
    </header>
  );
}