import { useState, useEffect } from "react";
import client from "./sanityClient";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await client.fetch(
        `*[_type == "article"]{_id, title, category, content, "imageUrl": image.asset->url}`
      );
      setArticles(data);
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📚 Articles & Research</h2>

      <input
        type="text"
        placeholder="🔍 Search articles..."
        className="w-full p-3 mb-6 border text-black border-gray-700 rounded-lg shadow-sm focus:ring focus:ring-blue-300 outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div 
              key={article._id} 
              className="flex flex-col md:flex-row bg-white p-5 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden flex-wrap"
            >
              {/* ✅ Image (Fixed Size & Overflow Hidden) */}
              {article.imageUrl && (
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full md:w-1/3 max-h-48 object-cover rounded-lg"
                />
              )}

              {/* ✅ Content with Fixed Size & Hidden Overflow */}
              <div className="md:w-2/3 p-4 overflow-hidden">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{article.title}</h3>
                <p className=" flex-col w-145 text-gray-600 text-sm mb-2 ">
                  {article.content}
                </p>
                <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  #{article.category}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
