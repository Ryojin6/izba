"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Clock,
  Moon,
  Coffee,
  Utensils,
  Sun,
  X,
} from "lucide-react";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  const openLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle("");
    document.body.style.overflow = "unset";
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <a
              href="#home"
              className="text-sm md:text-base text-gray-300 hover:text-cafe-red transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm md:text-base text-gray-300 hover:text-cafe-red transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#hours"
              className="text-sm md:text-base text-gray-300 hover:text-cafe-red transition-colors font-medium"
            >
              Hours
            </a>
            <a
              href="#menu"
              className="text-sm md:text-base text-gray-300 hover:text-cafe-red transition-colors font-medium"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-sm md:text-base text-gray-300 hover:text-cafe-red transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20"
      >
        {/* Logo */}
        <div className="mb-12 animate-fade-in w-full max-w-2xl px-4">
          <div className="relative w-full aspect-square transition-all duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Izba Espresso"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://www.facebook.com/izbaespresso/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Visit our Facebook page"
          >
            <div className="p-4 bg-cafe-dark-gray rounded-full border-2 border-gray-800 transition-all duration-300 hover:border-cafe-red hover:bg-cafe-red/10 hover:scale-110">
              <Facebook className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-cafe-red transition-colors" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/izbaespresso/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label="Visit our Instagram page"
          >
            <div className="p-4 bg-cafe-dark-gray rounded-full border-2 border-gray-800 transition-all duration-300 hover:border-cafe-red hover:bg-cafe-red/10 hover:scale-110">
              <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-cafe-red transition-colors" />
            </div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-cafe-red rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-cafe-red rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-cafe-dark-gray/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Coffee className="w-8 h-8 text-cafe-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-cafe-red">
              About Us
            </h2>
            <Coffee className="w-8 h-8 text-cafe-red" />
          </div>
          <div className="w-20 h-1 bg-cafe-red mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Welcome to Izba Espresso, where passion meets perfection in every
            cup. Nestled in the heart of Caloundra West, we pride ourselves on
            delivering exceptional coffee and culinary experiences in a warm,
            inviting atmosphere.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            From our carefully crafted breakfast and lunch menus to our
            exclusive dinner service, every dish is prepared with locally
            sourced ingredients and served with genuine hospitality.
          </p>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section id="hours" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-cafe-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cafe-red">
              Opening Hours
            </h2>
          </div>
          <div className="w-20 h-1 bg-cafe-red mx-auto mb-12"></div>

          <div className="bg-cafe-dark-gray/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-800">
            <div className="space-y-4">
              {/* Monday */}
              <div className="flex justify-between items-center py-4 border-b border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-gray-600" />
                  <span className="text-lg md:text-xl font-medium">Monday</span>
                </div>
                <span className="text-gray-300 text-lg md:text-xl">
                  6:30 AM – 2:30 PM
                </span>
              </div>

              {/* Tuesday */}
              <div className="flex justify-between items-center py-4 border-b border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-gray-600" />
                  <span className="text-lg md:text-xl font-medium">
                    Tuesday
                  </span>
                </div>
                <span className="text-gray-300 text-lg md:text-xl">
                  6:30 AM – 2:30 PM
                </span>
              </div>

              {/* Wednesday - Dinner Available */}
              <div className="flex justify-between items-center py-4 border-b border-gray-800 bg-cafe-red/10 rounded-lg px-4 -mx-4 hover:bg-cafe-red/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-cafe-red" />
                  <span className="text-lg md:text-xl font-medium">
                    Wednesday
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-gray-300 text-lg md:text-xl">
                    6:30 AM – 2:30 PM
                  </div>
                  <div className="text-cafe-red font-semibold text-base md:text-lg flex items-center justify-end gap-2">
                    <Utensils className="w-4 h-4" />
                    5:00 PM – 8:30 PM
                  </div>
                </div>
              </div>

              {/* Thursday - Dinner Available */}
              <div className="flex justify-between items-center py-4 border-b border-gray-800 bg-cafe-red/10 rounded-lg px-4 -mx-4 hover:bg-cafe-red/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-cafe-red" />
                  <span className="text-lg md:text-xl font-medium">
                    Thursday
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-gray-300 text-lg md:text-xl">
                    6:30 AM – 2:30 PM
                  </div>
                  <div className="text-cafe-red font-semibold text-base md:text-lg flex items-center justify-end gap-2">
                    <Utensils className="w-4 h-4" />
                    5:00 PM – 8:30 PM
                  </div>
                </div>
              </div>

              {/* Friday - Dinner Available */}
              <div className="flex justify-between items-center py-4 border-b border-gray-800 bg-cafe-red/10 rounded-lg px-4 -mx-4 hover:bg-cafe-red/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-cafe-red" />
                  <span className="text-lg md:text-xl font-medium">Friday</span>
                </div>
                <div className="text-right">
                  <div className="text-cafe-red font-semibold text-lg md:text-xl flex items-center justify-end gap-2">
                    <Utensils className="w-4 h-4" />
                    6:30 AM – 8:30 PM
                  </div>
                </div>
              </div>

              {/* Saturday - Dinner Available */}
              <div className="flex justify-between items-center py-4 border-b border-gray-800 bg-cafe-red/10 rounded-lg px-4 -mx-4 hover:bg-cafe-red/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-cafe-red" />
                  <span className="text-lg md:text-xl font-medium">
                    Saturday
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-cafe-red font-semibold text-lg md:text-xl flex items-center justify-end gap-2">
                    <Utensils className="w-4 h-4" />
                    7:00 AM – 8:30 PM
                  </div>
                </div>
              </div>

              {/* Sunday */}
              <div className="flex justify-between items-center py-4 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-gray-600" />
                  <span className="text-lg md:text-xl font-medium">Sunday</span>
                </div>
                <span className="text-gray-300 text-lg md:text-xl">
                  7:00 AM – 3:00 PM
                </span>
              </div>
            </div>

            {/* Dinner Service Note */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex items-center justify-center gap-3 text-cafe-red">
                <Clock className="w-5 h-5" />
                <p className="text-base md:text-lg font-medium">
                  Dinner service available Wednesday – Saturday evenings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 px-4 bg-cafe-dark-gray/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-cafe-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cafe-red">
              Visit Us
            </h2>
          </div>
          <div className="w-20 h-1 bg-cafe-red mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=1-13+Bells+Reach+Dr,+Caloundra+West+QLD+4551"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-black rounded-xl p-8 border-2 border-gray-800 transition-all duration-300 hover:border-cafe-red hover:scale-105 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cafe-red/10 rounded-lg group-hover:bg-cafe-red/20 transition-colors">
                    <MapPin className="w-6 h-6 text-cafe-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-cafe-red transition-colors">
                      Location
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      1-13 Bells Reach Dr
                      <br />
                      Caloundra West QLD 4551
                    </p>
                    <p className="text-cafe-red mt-2 text-sm font-medium">
                      Click to open in Maps →
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:0424841000" className="group">
              <div className="bg-black rounded-xl p-8 border-2 border-gray-800 transition-all duration-300 hover:border-cafe-red hover:scale-105 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cafe-red/10 rounded-lg group-hover:bg-cafe-red/20 transition-colors">
                    <Phone className="w-6 h-6 text-cafe-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-cafe-red transition-colors">
                      Phone
                    </h3>
                    <p className="text-gray-300 text-lg">0424 841 000</p>
                    <p className="text-cafe-red mt-2 text-sm font-medium">
                      Click to call →
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Utensils className="w-8 h-8 text-cafe-red" />
            <h2 className="text-3xl md:text-4xl font-bold text-cafe-red">
              Our Menu
            </h2>
          </div>
          <div className="w-20 h-1 bg-cafe-red mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Breakfast Menu */}
            <div className="bg-cafe-dark-gray/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-cafe-red transition-all duration-300 group">
              <div
                onClick={() =>
                  openLightbox("/breakfastmenu.jpg", "Breakfast Menu")
                }
                className="block relative h-96 md:h-[600px] cursor-pointer"
              >
                <Image
                  src="/breakfastmenu.jpg"
                  alt="Breakfast Menu"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cafe-red mb-2">
                  Breakfast Menu
                </h3>
                <p className="text-gray-400">Available daily from 6:30 AM</p>
                <p className="text-sm text-gray-500 mt-2">
                  Click to view full size
                </p>
              </div>
            </div>

            {/* Lunch Menu */}
            <div className="bg-cafe-dark-gray/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-cafe-red transition-all duration-300 group">
              <div
                onClick={() => openLightbox("/lunchmenu.jpg", "Lunch Menu")}
                className="block relative h-96 md:h-[600px] cursor-pointer"
              >
                <Image
                  src="/lunchmenu.jpg"
                  alt="Lunch Menu"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cafe-red mb-2">
                  Lunch Menu
                </h3>
                <p className="text-gray-400">Available daily until 2:30 PM</p>
                <p className="text-sm text-gray-500 mt-2">
                  Click to view full size
                </p>
              </div>
            </div>

            {/* Dinner Menu */}
            <div className="bg-cafe-dark-gray/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-cafe-red transition-all duration-300 group">
              <div
                onClick={() => openLightbox("/dinnermenu.jpg", "Dinner Menu")}
                className="block relative h-96 md:h-[600px] cursor-pointer"
              >
                <Image
                  src="/dinnermenu.jpg"
                  alt="Dinner Menu"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cafe-red mb-2">
                  Dinner Menu
                </h3>
                <p className="text-gray-400 flex items-center justify-center gap-2">
                  <Moon className="w-4 h-4" />
                  Wed-Sat Evenings
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Click to view full size
                </p>
              </div>
            </div>

            {/* Kids Menu */}
            <div className="bg-cafe-dark-gray/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-cafe-red transition-all duration-300 group">
              <div
                onClick={() => openLightbox("/kidsmenu.jpg", "Kids Menu")}
                className="block relative h-96 md:h-[600px] cursor-pointer"
              >
                <Image
                  src="/kidsmenu.jpg"
                  alt="Kids Menu"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cafe-red mb-2">
                  Kids Menu
                </h3>
                <p className="text-gray-400">Available all day</p>
                <p className="text-sm text-gray-500 mt-2">
                  Click to view full size
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Izba Espresso. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-cafe-red/20 hover:bg-cafe-red/40 rounded-full border-2 border-cafe-red transition-all duration-300 z-[101]"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="max-w-7xl max-h-[90vh] w-full h-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-cafe-red">
                {lightboxTitle}
              </h3>
            </div>
            <div className="relative w-full h-[calc(90vh-80px)]">
              <Image
                src={lightboxImage}
                alt={lightboxTitle}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
