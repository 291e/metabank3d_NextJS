export default function LocationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="w-full h-72 md:h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="메타뱅크 본사 위치"
            src="https://www.google.com/maps?q=대전광역시+대덕구+한남로+70&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">본사</h2>
          <p className="text-gray-600 dark:text-gray-300">
            대전광역시 대덕구 한남로 70
            <br />
            한남대캠퍼스혁신파크 B동 205호
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">부설 연구소</h2>
          <p className="text-gray-600 dark:text-gray-300">
            대전광역시 대덕구 한남로 70
            <br />
            한남대학교 11동 404호
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서울 사무실</h2>
          <p className="text-gray-600 dark:text-gray-300">
            서울특별시 용산구 신흥로 32실, 30, 1층
          </p>
        </div>
      </div>
    </div>
  );
}
