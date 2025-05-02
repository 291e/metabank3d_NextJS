export default function InsurancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Insurance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            보험 분야를 위한 메타버스 솔루션으로, 손해 평가와 보험 서비스를
            혁신합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>3D 손해 평가</li>
            <li>가상 현장 조사</li>
            <li>실시간 보험 상담</li>
            <li>데이터 분석 시스템</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
