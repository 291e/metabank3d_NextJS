export default function MetaActionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Meta Action</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">제품 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Meta Action은 동작 캡처와 3D 애니메이션을 위한 솔루션으로, 실시간
            모션 트래킹과 캐릭터 애니메이션을 제공합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>실시간 모션 캡처</li>
            <li>3D 캐릭터 애니메이션</li>
            <li>자세 인식</li>
            <li>게임 엔진 연동</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
