export default function Footer() {
  return (
    <footer className="bg-black rounded-t-2xl shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-10" alt="Gamba Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://explorer.gamba.so/create"
                className="hover:underline me-4 md:me-6"
              >
                
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/BankkRoll/Gamba-V2-Next.js"
                className="hover:underline me-4 md:me-6"
              >
                
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=""
                className="hover:underline me-4 md:me-6"
              >
                
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href=""
                className="hover:underline"
              >
                
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {" "}
          <a
            href=""
            className="hover:underline"
          >
            OHYEAH!
          </a>
        </span>
      </div>
    </footer>
  );
}
