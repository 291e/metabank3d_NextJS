import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:justify-items-center">
          <div className="flex flex-col gap-6">
            {/* 회사 정보 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">(주)메타뱅크</h3>
              <p className="text-gray-400">© 2024 metabank, inc.</p>
              <p className="text-gray-400">세상을 아름답게 데이터화 합니다!</p>
            </div>

            {/* 주소 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">개인정보방침안내</h3>
              <div className="space-y-2 text-gray-500 text-xs">
                <p>
                  본사 | 대전광역시 대덕구 한남로 70 한남대캠퍼스혁신파크 B동
                  205호
                </p>
                <p>
                  부설 연구소 | 대전광역시 대덕구 한남로 70 한남대학교 11동
                  404호
                </p>
                <p>서울 사무실 | 서울특별시 용산구 신흥로 32실, 30, 1층</p>
                <p>사업자 : (주)메타뱅크 | 대표 : 소요환</p>
                <p>사업자번호 : 755-86-02418</p>
                <p>TEL : 042-385-1008</p>
                <p>E-mail : metabank.ask@gmail.com</p>
              </div>
            </div>
          </div>
          {/* 회사 메뉴 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/metabank"
                  className="hover:text-white transition-colors"
                >
                  Metabank inc.
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="hover:text-white transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-white transition-colors"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* 제품 메뉴 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/meta-vision"
                  className="hover:text-white transition-colors"
                >
                  Meta Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/meta-360"
                  className="hover:text-white transition-colors"
                >
                  Meta 360
                </Link>
              </li>
              <li>
                <Link
                  href="/meta-pano"
                  className="hover:text-white transition-colors"
                >
                  Meta Pano
                </Link>
              </li>
              <li>
                <Link
                  href="/meta-action"
                  className="hover:text-white transition-colors"
                >
                  Meta Action
                </Link>
              </li>
              <li>
                <Link
                  href="/meta-eye"
                  className="hover:text-white transition-colors"
                >
                  Meta Eye
                </Link>
              </li>
              <li>
                <Link
                  href="/meta-capture"
                  className="hover:text-white transition-colors"
                >
                  Meta Capture
                </Link>
              </li>
            </ul>
          </div>

          {/* 서비스 메뉴 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/real-meta"
                  className="hover:text-white transition-colors"
                >
                  Real meta
                </Link>
              </li>
              <li>
                <Link
                  href="/metaverse-shopping-mall"
                  className="hover:text-white transition-colors"
                >
                  Metaverse shopping mall
                </Link>
              </li>
              <li>
                <Link
                  href="/metaverse-museum"
                  className="hover:text-white transition-colors"
                >
                  Metaverse museum
                </Link>
              </li>
              <li>
                <Link
                  href="/interaction-content"
                  className="hover:text-white transition-colors"
                >
                  Interaction content
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-semibold pt-4">Business</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/shopping-retail"
                  className="hover:text-white transition-colors"
                >
                  Shopping / retail
                </Link>
              </li>
              <li>
                <Link
                  href="/museum"
                  className="hover:text-white transition-colors"
                >
                  Museum
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate"
                  className="hover:text-white transition-colors"
                >
                  Real estate
                </Link>
              </li>
              <li>
                <Link
                  href="/architecture-construction-engineering"
                  className="hover:text-white transition-colors"
                >
                  Architecture, Construction, Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="hover:text-white transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/gis"
                  className="hover:text-white transition-colors"
                >
                  GIS
                </Link>
              </li>
              <li>
                <Link
                  href="/facility-management"
                  className="hover:text-white transition-colors"
                >
                  Facility management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} MetaBank3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
