export default function RealEstatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Real Estate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            부동산 분야를 위한 메타버스 솔루션으로, 가상 부동산 투어와 시각화를
            혁신합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>가상 부동산 투어</li>
            <li>3D 공간 시각화</li>
            <li>인테리어 시뮬레이션</li>
            <li>실시간 상담 시스템</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
