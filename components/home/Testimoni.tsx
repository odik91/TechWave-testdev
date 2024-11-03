import CarouselTestimoni from "./CarouselTestimoni";

const Testimoni = () => {
  return (
    <div className="mb-10">
      <section className="flex justify-center items-center p-6">
        <div className="flex justify-center items-center max-w-2xl mb-6">
          <div className="text-center">
            <h5 className="text-gray-800 font-medium text-[28px] tracking-wide mb-2">
              Testimoni Klien
            </h5>
            <p className="text-gray-600 tracking-wide font-normal">
              Klien kami puas dengan kinerja dan aplikasi yang telah diterima
              dan digunakan oleh mereka sebagai alat penunjang bisnis yang
              mereka jalankan
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <CarouselTestimoni />
      </div>
    </div>
  );
};
export default Testimoni;
