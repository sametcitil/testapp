import React, { useState } from "react";

export default function AuthPanel() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-2xl h-[500px] rounded-2xl shadow-2xl overflow-hidden">
        {/* Sol Panel */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-tr from-blue-700 to-blue-400 text-white px-8">
          <h2 className="text-2xl font-bold mb-3">{showSignUp ? "Tekrar Hoşgeldin!" : "Merhaba, Arkadaşım!"}</h2>
          <p className="mb-6 text-center">
            {showSignUp
              ? "Hesabınla giriş yapmak için hemen oturum aç."
              : "Kişisel bilgilerini gir ve yolculuğuna bizimle başla."}
          </p>
          <button
            className="border-2 border-white text-white rounded-full px-8 py-2 font-semibold hover:bg-white hover:text-blue-700 transition"
            onClick={() => setShowSignUp((v) => !v)}
          >
            {showSignUp ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </div>
        {/* Sağ Panel */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-white px-8">
          {showSignUp ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Kayıt Ol</h2>
              <form className="w-full flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="p-2 rounded border border-blue-200 focus:border-blue-500 outline-none bg-gray-50"
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  className="p-2 rounded border border-blue-200 focus:border-blue-500 outline-none bg-gray-50"
                />
                <input
                  type="password"
                  placeholder="Şifre"
                  className="p-2 rounded border border-blue-200 focus:border-blue-500 outline-none bg-gray-50"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-full py-2 mt-2 font-semibold hover:bg-blue-700 transition"
                >
                  Kayıt Ol
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Giriş Yap</h2>
              <form className="w-full flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="E-posta"
                  className="p-2 rounded border border-blue-200 focus:border-blue-500 outline-none bg-gray-50"
                />
                <input
                  type="password"
                  placeholder="Şifre"
                  className="p-2 rounded border border-blue-200 focus:border-blue-500 outline-none bg-gray-50"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-full py-2 mt-2 font-semibold hover:bg-blue-700 transition"
                >
                  Giriş Yap
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
