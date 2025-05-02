export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">News</h1>
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold">
              메타뱅크, 새로운 3D 스캔 기술 발표
            </h2>
            <span className="text-gray-500">2024.04.15</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            메타뱅크가 기존 대비 2배 빠른 3D 스캔 기술을 개발했습니다...
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold">메타버스 쇼핑몰 오픈</h2>
            <span className="text-gray-500">2024.03.20</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            메타뱅크의 새로운 메타버스 쇼핑몰이 오픈했습니다...
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold">한남대학교와 MOU 체결</h2>
            <span className="text-gray-500">2024.02.10</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            메타뱅크가 한남대학교와 기술 협력 MOU를 체결했습니다...
          </p>
        </div>
      </div>
    </div>
  );
}
