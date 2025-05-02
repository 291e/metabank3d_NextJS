export default function FacilityManagementPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Facility Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            시설 관리 분야를 위한 메타버스 솔루션으로, 시설 운영과 관리를
            혁신합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>3D 시설 모니터링</li>
            <li>실시간 관리 시스템</li>
            <li>예방적 유지보수</li>
            <li>에너지 관리</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
