import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1A3441] py-10  px-6 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white">
        <div className="flex items-center space-x-4 mb-4 md:mb-0 ">
          <Image src="/logo-footer.svg" alt="Government Logo" width={150} height={100} />
        </div>
        <div className="flex flex-col items-center space-x-6 text-white gap-2">
          <div>
            <Image src="/footer-talk.svg" alt="Government Logo" width={150} height={100} />
          </div>
          <div className='flex justify-center items-center gap-3 '>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icon-facebook.svg" alt="Facebook" width={30} height={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons-instagram.svg" alt="Instagram" width={35} height={30} />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons-twitterx .svg" alt="Twitter" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons-linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
