function App() {
  const apps = [
    {
      id: 1,
      name: '星空体育',
      description:' ',
      image: 'https://pic1.imgdb.cn/item/69a40ac1ac80c84bfd15ae58.png',
      color: 'from-blue-500 to-cyan-500',
      link: 'ttps://www.8ahmna.vip:9003/register/?agent_code=55699651'
    },
    {
      id: 2,
      name: '开云体育',
      description: '  ',
      image: 'https://pic1.imgdb.cn/item/699c51217aea005f38310225.jpg',
      color: 'from-orange-500 to-amber-500',
      link: 'https://www.vwqv2s.vip:9663/entry/register79049/?i_code=94491262'
    },
    {
      id: 3,
      name: '米兰体育',
      description: '  ',
      image: 'https://pic1.imgdb.cn/item/699c510a7aea005f38310220.jpg',
      color: 'from-green-500 to-teal-500',
      link: 'https://www.pr9oj0.vip:9037/entry/register27248/?i_code=321944933'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            （多多体育）
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
                            🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          {apps.map((app) => {
            return (
              <a
                key={app.id}
                href={app.link}
                className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="flex flex-row items-center gap-4 md:gap-6 p-4 md:p-8">
                  {/* Image Section */}
                  <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={app.image}
                      alt={app.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shadow-md"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow text-left">
                    <h2 className="text-lg md:text-3xl font-bold text-slate-800 mb-1 md:mb-2">
                      {app.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {app.description}
                    </p>
                  </div>

                  {/* Button Section */}
                  <div
                    className={`flex-shrink-0 text-center py-2 px-4 md:py-3 md:px-8 rounded-xl font-semibold text-white bg-gradient-to-r ${app.color} group-hover:opacity-90 transition-all duration-300 transform group-hover:scale-105 shadow-md group-hover:shadow-xl text-sm md:text-base whitespace-nowrap`}
                  >
                    立即访问
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            © 2026 多多体育 保留所有权利
          </p>
          <p className="text-xs text-slate-400 mt-2">

          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
