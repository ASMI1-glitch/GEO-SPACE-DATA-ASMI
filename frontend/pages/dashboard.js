import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

const Dashboard = () => {
  const address = "1600 Pennsylvania Ave NW, Washington, DC 20500"; // Example address

  return (
    <div>
      <h1>Dashboard</h1>
      <Map address={address} />
    </div>
  );
}

export default Dashboard;
