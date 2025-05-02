export default function MetaPanoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Meta Pano</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">제품 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Meta Pano는 고해상도 파노라마 이미지 제작을 위한 전문 솔루션으로,
            건축물과 인테리어 촬영에 최적화되어 있습니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>고해상도 파노라마 촬영</li>
            <li>HDR 이미지 처리</li>
            <li>자동 노출 제어</li>
            <li>정밀 측정 기능</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
