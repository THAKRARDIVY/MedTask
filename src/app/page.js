import Header from "@/components/Header/header";
import Details from "@/components/Details/details";
import HospitalDetails from "@/components/HospitalDetails/HospitalDetails";
import Footer from "@/components/Footer/footer";
import ImagesHome from "@/components/ImagesHome/ImagesHome";

export default function Home() {
  return (
    <div>
      <Header />
      <ImagesHome />
      <Details />
      <HospitalDetails />
      <Footer />
    </div>
  );
}
