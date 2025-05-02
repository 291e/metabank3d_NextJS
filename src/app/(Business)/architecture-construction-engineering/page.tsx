export default function ArchitectureConstructionEngineeringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Architecture, Construction, Engineering
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            건축, 건설, 엔지니어링 분야를 위한 메타버스 솔루션으로, 설계와
            시공을 혁신합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>3D 설계 시각화</li>
            <li>가상 시공 시뮬레이션</li>
            <li>실시간 협업 시스템</li>
            <li>건설 현장 모니터링</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
