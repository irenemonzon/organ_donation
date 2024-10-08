import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1A3441] py-4 md:py-10  md:px-6 mt-20">
      <div className="container mx-auto  px-4 flex flex-row justify-between items-center text-white">
        <div className="flex items-center space-x-4  md:mb-0 ">
          <Image src="/logo-footer.svg" alt="Government Logo" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center text-white gap-3">
          <div>
            <Image src="/footer-talk.svg" alt="talk Logo" width={130} height={130} />
          </div>
          <div className='flex justify-center items-center gap-3 '>
            <a href="https://www.facebook.com/DonateLifeAustralia" target="_blank" rel="noopener noreferrer">
              <Image src="/icon-facebook.svg" alt="Facebook" width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/donatelifetoday" target="_blank" rel="noopener noreferrer">
              <Image src="/icons-instagram.svg" alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://x.com/DonateLifeToday" target="_blank" rel="noopener noreferrer">
              <Image src="/icons-twitterx .svg" alt="Twitter" width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/company/organ-and-tissue-authority" target="_blank" rel="noopener noreferrer">
              <Image src="/icons-linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
