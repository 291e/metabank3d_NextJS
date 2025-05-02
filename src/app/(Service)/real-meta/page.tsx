export default function RealMetaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Real Meta</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Real Meta는 현실 세계의 공간을 메타버스로 구현하는 서비스로,
            실감나는 가상 경험을 제공합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>3D 공간 스캐닝</li>
            <li>가상 공간 구현</li>
            <li>실시간 상호작용</li>
            <li>멀티플랫폼 지원</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
