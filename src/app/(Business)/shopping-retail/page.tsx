export default function ShoppingRetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping / Retail</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
          <p className="text-gray-600 dark:text-gray-300">
            쇼핑/리테일 분야를 위한 메타버스 솔루션으로, 가상 매장과 온라인 쇼핑
            경험을 혁신합니다.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>가상 매장 구현</li>
            <li>실시간 상품 전시</li>
            <li>가상 시착 시스템</li>
            <li>실시간 결제 연동</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
