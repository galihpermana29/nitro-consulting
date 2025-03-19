import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer bg-[#202020] text-white py-6">
      <div className="container-fluid">
        <div id="grid-footer" className="flex flex-col md:flex-row">
          <div id="grid-venture" className="md:w-1/4 mb-4 md:mb-0">
            <p>© 2021 Nitro Consulting</p>
          </div>
          <div id="grid-link" className="md:w-2/4 mb-4 md:mb-0">
            <ul className="footer-link flex flex-wrap space-x-4">
              {/* For future links */}
            </ul>
          </div>
          <div id="grid-sosmed" className="md:w-1/4 flex justify-end">
            <div className="footersosmed">
              <a
                href="https://www.linkedin.com/company/agungventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
