import DetailForm from "./DetailForm";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center bg-purple-50">
      <div className="container p-6">
        <h2 className="text-center mt-10 mb-4 text-3xl text-gray-800 font-medium tracking-wider">
          Hubungi kami
        </h2>
        <div className="flex justify-center">
          <p className="text-center text-gray-500 sm:w-[500px]">
            Jika anda terdapat pertanyaan atau anda ingin diskusi tentang projek
            dan malasah sistem informasi, anda dapat menghubungi kami melalui
            form berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 my-6">
          <div className="p-6">
            <h6 className="text-gray-800 text-lg tracking-wider mb-3">
              Tetap terhubung
            </h6>
            <div className="text-gray-500 text-sm">
              <p>Alamat: </p>
              <p>0479 Norway Maple Way</p>
              <p>Los Angeles, California</p>
              <p>United States</p>
              <p>90060</p>
            </div>
          </div>
          <div className="md:col-span-2 p-6">
            <DetailForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
