export default function InteractionContentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Interaction Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            상호작용 콘텐츠는 사용자 참여형 디지털 콘텐츠를 제작하는 서비스로,
            다양한 인터랙션을 구현합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>사용자 참여형 콘텐츠</li>
            <li>실시간 피드백</li>
            <li>다양한 인터랙션</li>
            <li>맞춤형 콘텐츠 제작</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
