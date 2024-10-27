const Footer = () => {
    return (
        <footer className="w-full bg-red-300 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                    <div>
                        <h2 className="text-xl font-semibold mb-4">Hakkımızda</h2>
                        <p className="text-sm">
                            Şirketimiz, kaliteli hizmet sunma anlayışıyla kurulmuştur. Amacımız, kullanıcılarımıza en iyi deneyimi sunmaktır. Bizimle ilgili daha fazla bilgiye ulaşmak için iletişime geçebilirsiniz.
                        </p>
                    </div>


                    <div>
                        <h2 className="text-xl font-semibold mb-4">İletişim Bilgileri</h2>
                        <p className="text-sm">Adres: Ankara, Türkiye</p>
                        <p className="text-sm">Telefon: +90 312 123 4567</p>
                        <p className="text-sm">E-posta: info@sirket.com</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Bizi Takip Edin</h2>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition-colors duration-300">
                                Facebook
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition-colors duration-300">
                                Twitter
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors duration-300">
                                Instagram
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 transition-colors duration-300">
                                LinkedIn
                            </a>
                        </div>

                        <h2 className="text-xl font-semibold mt-6 mb-4">Hızlı Linkler</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="/about" className="hover:underline">Hakkımızda</a></li>
                            <li><a href="/services" className="hover:underline">Hizmetlerimiz</a></li>
                            <li><a href="/contact" className="hover:underline">İletişim</a></li>
                            <li><a href="/privacy" className="hover:underline">Gizlilik Politikası</a></li>
                        </ul>
                    </div>
                </div>


                <div className="text-center text-sm mt-8">
                    <p>&copy; {new Date().getFullYear()} Şirket İsmi. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
