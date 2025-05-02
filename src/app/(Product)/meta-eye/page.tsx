export default function MetaEyePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Meta Eye</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">제품 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Meta Eye는 AI 기반 이미지 분석 솔루션으로, 객체 인식과 이미지 처리에
            특화된 기술을 제공합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>AI 객체 인식</li>
            <li>이미지 분석</li>
            <li>패턴 인식</li>
            <li>실시간 처리</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
