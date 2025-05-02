export default function MetaCapturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Meta Capture</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">제품 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Meta Capture는 3D 스캐닝과 포토그래메트리를 위한 통합 솔루션으로,
            정밀한 3D 모델 생성에 최적화되어 있습니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>3D 스캐닝</li>
            <li>포토그래메트리</li>
            <li>텍스처 매핑</li>
            <li>모델 최적화</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
