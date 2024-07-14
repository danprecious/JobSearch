import Logo from "@/components/logo";

export default function RootLayout({ children }) {
    return (
          <section className=''>
            <div className="flex justify-center mt-16 flex-col">
                <div className="flex justify-center">
                    <Logo />
                    </div>
              {children}  
            </div>
          </section>
    );
  }