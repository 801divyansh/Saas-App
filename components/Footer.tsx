import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t-1 z-10 relative">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">EduBuddy AI</h2>
            <p className="text-muted-foreground">
              Smarter Conversations Smarter Result, We handle the follow-up so you can stay focused.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#feature">
                  <span className="hover:text-pink-500 transition-colors cursor-pointer">
                    Features
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/subscription">
                  <span className="hover:text-pink-500 transition-colors cursor-pointer">
                    Pricing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-pink-500 transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-pink-500 transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">
                  <span className="hover:text-pink-500 transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <span className="hover:text-pink-500 transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-muted-foreground">
              <Link href="https://github.com/801divyansh">
                <span className="hover:text-foreground transition-colors">
                  <FaGithub size={24} />
                </span>
              </Link>
              <Link href="https://x.com/divyansh86143?t=LM5HXNLmOQQnq7q7O9VcAw&s=09">
                <span className="hover:text-foreground transition-colors">
                  <FaTwitter size={24} />
                </span>
              </Link>
              <Link href="https://www.linkedin.com/in/divyansh-sharma-987b4b291/">
                <span className="hover:text-foreground transition-colors">
                  <FaLinkedin size={24} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduBuddy AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
