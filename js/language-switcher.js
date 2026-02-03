// 语言切换功能
const languageSwitcher = {
    // 支持的语言
    languages: {
        'zh': '中文',
        'en': 'English',
        'vi': 'Tiếng Việt'
    },
    
    // 当前语言
    currentLanguage: 'zh',
    
    // 语言数据
    translations: {
        // 中文
        'zh': {
            'home': '首頁',
            'about': '關於我們',
            'products': '產品中心',
            'industries': '行業應用',
            'cases': '應用案例',
            'brands': '合作品牌',
            'news': '新聞中心',
            'contact': '聯繫我們',
            'services': '服務',
            'welcome': '穩卓國際 - 專業塑膠原料供應商',
            'intro': '20+年經驗，服務全球500+客戶，專業代理全球優質塑膠原料',
            'browseProducts': '瀏覽產品',
            'contactUs': '在線咨詢',
            'ourAdvantages': '我們的優勢',
            'yearsExperience': '20+年經驗',
            'yearsExperienceDesc': '專注塑膠原料行業，擁有豐富的市場經驗和專業知識',
            'globalNetwork': '全球網絡',
            'globalNetworkDesc': '與多家國際知名塑膠原料生產商建立長期穩定合作關係',
            'qualityPartners': '優質夥伴',
            'qualityPartnersDesc': '代理銷售多個國際知名品牌的塑膠原料',
            'qualityControl': '質量管控',
            'qualityControlDesc': '嚴格的質量控制體系，確保產品質量穩定可靠',
            'efficientLogistics': '高效物流服務',
            'efficientLogisticsDesc': '完善的物流體系，確保貨物及時交付，滿足客戶生產需求',
            'professionalTeam': '專業服務團隊',
            'professionalTeamDesc': '經驗豐富的銷售和技術團隊，為客戶提供訂製化解決方案',
            'importExport': '自主進出口權',
            'importExportDesc': '公司擁有自主進出口權，直接與國際供應商和客戶進行貿易往來',
            'productCenter': '產品中心',
            'industryApplications': '行業應用',
            'aboutUs': '關於穩卓國際',
            'contactInfo': '聯繫信息',
            'address': '地址',
            'phone': '電話',
            'email': '郵箱',
            'workingHours': '工作時間',
            'followUs': '關注我們',
            'quickLinks': '快速鏈接',
            'productCategories': '產品分類',
            'engineeringPlastics': '工程塑膠',
            'generalPlastics': '通用塑膠',
            'biodegradablePlastics': '可降解塑膠',
            'thermoplasticElastomers': '熱塑性彈性體',
            'specialtyMaterials': '特種材料',
            'copyright': '© 2026 穩卓國際. 保留所有權利。',
            'about-description-1': '香港穩卓國際貿易有限公司成立於2009年，是一家專業從事塑膠原料貿易及國外品牌代理的企業。公司總部位於香港，在中國大陸、東南亞等地設有辦事處和倉儲中心。',
            'about-description-2': '多年來，我們始終堅持"質量第一，客戶至上"的經營理念，為客戶提供高品質的產品和專業的服務。我們與多家國際知名塑膠原料生產商建立了長期穩定的合作關係，代理銷售多個國際知名品牌的塑膠原料，同時與優質生產廠家合作開發定製化產品。',
            'about-description-3': '我們的產品廣泛應用於電子電器、汽車、家電、醫療、包裝等行業，服務全球500+客戶，以專業的服務和優質的產品贏得了客戶的信賴。',
            'about-learn-more': '了解更多',
            'news-read-more': '閱讀更多',
            'pagination-prev': '上一頁',
            'pagination-next': '下一頁',
            'news-20251230-title': '穩卓國際參加2025年塑膠原料行業峰會',
            'news-20251230-content': '12月30日，穩卓國際參加了在深圳舉辦的2025年塑膠原料行業峰會，與眾多行業專家、生產廠家代表齊聚一堂，共同探討塑膠原料行業的發展趨勢和未來方向，尋求更多優質廠家合作機會。',
            'news-20251215-title': '穩卓國際與巴斯夫簽署戰略合作協議',
            'news-20251215-content': '12月15日，穩卓國際與全球領先的化工公司巴斯夫簽署了戰略合作協議，作為巴斯夫的優質貿易合作夥伴，穩卓國際將為客戶提供更加穩定、優質的工程塑膠原料供應。',
            'news-20251120-title': '穩卓國際與合作廠家推出新型生物降解塑膠產品',
            'news-20251120-content': '11月20日，穩卓國際與優質生產廠家合作，推出了新型生物降解塑膠產品，該產品採用最新的生物降解技術，具有優異的降解性能和使用性能，可廣泛應用於包裝、一次性用品等領域。',
            'news-20251015-title': '穩卓國際榮獲"2025年度最佳塑膠原料供應商"稱號',
            'news-20251015-content': '10月15日，在由中國塑膠加工工業協會舉辦的2025年度行業評選中，穩卓國際憑藉優異的產品質量、完善的供應鏈管理和貼心的客戶服務，榮獲"2025年度最佳塑膠原料供應商"稱號。',
            'news-20250910-title': '穩卓國際惠州聯絡點正式設立',
            'news-20250910-content': '9月10日，穩卓國際惠州聯絡點正式設立，這是穩卓國際在華南地區的又一重要佈局，將進一步加強公司與珠三角地區生產廠家的合作，提升市場服務能力。',
            'news-20250825-title': '穩卓國際參加2025中國國際塑膠展',
            'news-20250825-content': '8月25日，穩卓國際參加了在上海舉辦的2025中國國際塑膠展，展示了與合作廠家共同開發的塑膠原料產品和解決方案，吸引了眾多行業客戶的關注。',
            'news-20250718-title': '穩卓國際與陶氏化學達成深度合作',
            'news-20250718-content': '7月18日，穩卓國際與全球領先的化工公司陶氏化學達成深度合作協議，作為陶氏化學的授權貿易合作夥伴，穩卓國際將為客戶提供更加全面的通用塑膠和工程塑膠解決方案。',
            'news-20250630-title': '穩卓國際與合作廠家推出全新熱塑性彈體系列產品',
            'news-20250630-content': '6月30日，穩卓國際與優質生產廠家合作，推出了全新的熱塑性彈體系列產品，該系列產品具有優異的彈性、耐磨性和耐油性，可廣泛應用於汽車、電子、醫療等領域。',
            'news-20250615-title': '穩卓國際亮相2025廣州國際橡塑展',
            'news-20250615-content': '6月15日，穩卓國際參加了在廣州舉辦的2025國際橡塑展，展示了與合作廠家共同開發的工程塑膠和生物降解塑膠產品，獲得了眾多客戶的青睞。',
            'news-20250515-title': '穩卓國際廣州辦事處優化調整完成',
            'news-20250515-content': '5月15日，穩卓國際廣州辦事處優化調整完成，進一步提升了辦公效率和服務能力，更好地服務於當地客戶和合作廠家。',
            'news-20250420-title': '穩卓國際榮獲"綠色供應商"認證',
            'news-20250420-content': '4月20日，穩卓國際榮獲由中國環境保護協會頒發的"綠色供應商"認證，這是對公司在環保塑膠原料供應方面努力的肯定，也是公司可持續發展戰略的重要成果。',
            'news-20250410-title': '穩卓國際參加2025深圳國際塑膠新材料展',
            'news-20250410-content': '4月10日，穩卓國際參加了在深圳舉辦的2025國際塑膠新材料展，重點展示了與合作廠家共同開發的熱塑性彈體和特種材料產品線，與眾多潛在客戶建立了聯繫。'
        },
        
        // 英文
        'en': {
            'home': 'Home',
            'about': 'About Us',
            'products': 'Products',
            'industries': 'Industries',
            'cases': 'Cases',
            'brands': 'Brands',
            'news': 'News',
            'contact': 'Contact',
            'services': 'Services',
            'welcome': 'Winzhuo International - Professional Plastic Raw Material Supplier',
            'intro': '20+ years experience, serving 500+ global customers, professional agent for global high-quality plastic raw materials',
            'browseProducts': 'Browse Products',
            'contactUs': 'Contact Us',
            'ourAdvantages': 'Our Advantages',
            'yearsExperience': '20+ Years Experience',
            'yearsExperienceDesc': 'Focus on plastic raw materials industry, with rich market experience and professional knowledge',
            'globalNetwork': 'Global Network',
            'globalNetworkDesc': 'Established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers',
            'qualityPartners': 'Quality Partners',
            'qualityPartnersDesc': 'Act as agent for many international well-known brands of plastic raw materials',
            'qualityControl': 'Quality Control',
            'qualityControlDesc': 'Strict quality control system to ensure stable and reliable product quality',
            'efficientLogistics': 'Efficient Logistics',
            'efficientLogisticsDesc': 'Perfect logistics system to ensure timely delivery of goods and meet customer production needs',
            'professionalTeam': 'Professional Team',
            'professionalTeamDesc': 'Experienced sales and technical team providing customized solutions for customers',
            'importExport': 'Import & Export Rights',
            'importExportDesc': 'The company has independent import and export rights, directly trading with international suppliers and customers',
            'productCenter': 'Product Center',
            'industryApplications': 'Industry Applications',
            'aboutUs': 'About Winzhuo International',
            'contactInfo': 'Contact Information',
            'address': 'Address',
            'phone': 'Phone',
            'email': 'Email',
            'workingHours': 'Working Hours',
            'followUs': 'Follow Us',
            'quickLinks': 'Quick Links',
            'productCategories': 'Product Categories',
            'engineeringPlastics': 'Engineering Plastics',
            'generalPlastics': 'General Plastics',
            'biodegradablePlastics': 'Biodegradable Plastics',
            'thermoplasticElastomers': 'Thermoplastic Elastomers',
            'specialtyMaterials': 'Specialty Materials',
            'copyright': '© 2026 Winzhuo International. All rights reserved.',
            'about-description-1': 'Hong Kong Winzhuo International Trade Co., Ltd. was established in 2009, specializing in plastic raw material trade and foreign brand agency. Headquartered in Hong Kong, the company has offices and warehousing centers in mainland China, Southeast Asia and other places.',
            'about-description-2': 'Over the years, we have always adhered to the business philosophy of "quality first, customer foremost", providing customers with high-quality products and professional services. We have established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers, acting as an agent for the sale of plastic raw materials from multiple international well-known brands, while cooperating with high-quality manufacturers to develop customized products.',
            'about-description-3': 'Our products are widely used in electronics, automotive, home appliances, medical, packaging and other industries, serving more than 500 global customers, and have won the trust of customers with professional services and high-quality products.',
            'about-learn-more': 'Learn More',
            'news-read-more': 'Read More',
            'pagination-prev': 'Previous Page',
            'pagination-next': 'Next Page',
            'news-20251230-title': 'Winzhuo International Participates in 2025 Plastic Raw Materials Industry Summit',
            'news-20251230-content': 'On December 30, Winzhuo International participated in the 2025 Plastic Raw Materials Industry Summit held in Shenzhen, gathering with many industry experts and manufacturer representatives to discuss the development trends and future directions of the plastic raw materials industry, seeking more high-quality manufacturer cooperation opportunities.',
            'news-20251215-title': 'Winzhuo International Signs Strategic Cooperation Agreement with BASF',
            'news-20251215-content': 'On December 15, Winzhuo International signed a strategic cooperation agreement with BASF, a global leading chemical company. As BASF\'s high-quality trading partner, Winzhuo International will provide customers with more stable and high-quality engineering plastic raw material supply.',
            'news-20251120-title': 'Winzhuo International Launches New Biodegradable Plastic Products with Cooperative Manufacturers',
            'news-20251120-content': 'On November 20, Winzhuo International cooperated with high-quality manufacturers to launch new biodegradable plastic products. These products adopt the latest biodegradation technology, with excellent degradation performance and usage performance, and can be widely applied in packaging, disposable products and other fields.',
            'news-20251015-title': 'Winzhuo International Wins "2025 Best Plastic Raw Material Supplier" Title',
            'news-20251015-content': 'On October 15, in the 2025 industry selection organized by the China Plastics Processing Industry Association, Winzhuo International won the title of "2025 Best Plastic Raw Material Supplier"凭借 its excellent product quality, perfect supply chain management and considerate customer service.',
            'news-20250910-title': 'Winzhuo International Huizhou Contact Point Officially Established',
            'news-20250910-content': 'On September 10, Winzhuo International\'s Huizhou contact point was officially established. This is another important layout of Winzhuo International in South China, which will further strengthen the company\'s cooperation with manufacturers in the Pearl River Delta region and enhance market service capabilities.',
            'news-20250825-title': 'Winzhuo International Participates in 2025 China International Plastics Exhibition',
            'news-20250825-content': 'On August 25, Winzhuo International participated in the 2025 China International Plastics Exhibition held in Shanghai, showcasing plastic raw material products and solutions jointly developed with cooperative manufacturers, attracting the attention of many industry customers.',
            'news-20250718-title': 'Winzhuo International Reaches In-depth Cooperation with Dow Chemical',
            'news-20250718-content': 'On July 18, Winzhuo International reached an in-depth cooperation agreement with Dow Chemical, a global leading chemical company. As an authorized trading partner of Dow Chemical, Winzhuo International will provide customers with more comprehensive general plastic and engineering plastic solutions.',
            'news-20250630-title': 'Winzhuo International Launches New Thermoplastic Elastomer Series Products with Cooperative Manufacturers',
            'news-20250630-content': 'On June 30, Winzhuo International cooperated with high-quality manufacturers to launch a new series of thermoplastic elastomer products. This series of products has excellent elasticity, wear resistance and oil resistance, and can be widely applied in automotive, electronics, medical and other fields.',
            'news-20250615-title': 'Winzhuo International Appears at 2025 Guangzhou International Rubber and Plastics Exhibition',
            'news-20250615-content': 'On June 15, Winzhuo International participated in the 2025 International Rubber and Plastics Exhibition held in Guangzhou, showcasing engineering plastics and biodegradable plastic products jointly developed with cooperative manufacturers, which were favored by many customers.',
            'news-20250515-title': 'Winzhuo International Guangzhou Office Optimization Adjustment Completed',
            'news-20250515-content': 'On May 15, the optimization adjustment of Winzhuo International\'s Guangzhou office was completed, further improving office efficiency and service capabilities, better serving local customers and cooperative manufacturers.',
            'news-20250420-title': 'Winzhuo International Wins "Green Supplier" Certification',
            'news-20250420-content': 'On April 20, Winzhuo International won the "Green Supplier" certification issued by the China Environmental Protection Association. This is an affirmation of the company\'s efforts in environmental protection plastic raw material supply, and also an important achievement of the company\'s sustainable development strategy.',
            'news-20250410-title': 'Winzhuo International Participates in 2025 Shenzhen International Plastic New Materials Exhibition',
            'news-20250410-content': 'On April 10, Winzhuo International participated in the 2025 International Plastic New Materials Exhibition held in Shenzhen, focusing on showcasing thermoplastic elastomer and specialty material product lines jointly developed with cooperative manufacturers, and establishing contacts with many potential customers.'
        },
        
        // 越南文
        'vi': {
            'home': 'Trang chủ',
            'about': 'Về chúng tôi',
            'products': 'Sản phẩm',
            'industries': 'Ngành nghề',
            'cases': 'Trường hợp',
            'brands': 'Thương hiệu',
            'news': 'Tin tức',
            'contact': 'Liên hệ',
            'services': 'Dịch vụ',
            'welcome': 'Winzhuo International - Nhà cung cấp nguyên liệu nhựa chuyên nghiệp',
            'intro': '20+ năm kinh nghiệm, phục vụ 500+ khách hàng toàn cầu, đại lý chuyên nghiệp cho nguyên liệu nhựa chất lượng toàn cầu',
            'browseProducts': 'Duyệt sản phẩm',
            'contactUs': 'Liên hệ chúng tôi',
            'ourAdvantages': 'Lợi thế của chúng tôi',
            'yearsExperience': '20+ Năm Kinh Nghiệm',
            'yearsExperienceDesc': 'Tập trung vào ngành nguyên liệu nhựa, với kinh nghiệm thị trường phong phú và kiến thức chuyên nghiệp',
            'globalNetwork': 'Mạng Toàn Cầu',
            'globalNetworkDesc': 'Thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế',
            'qualityPartners': 'Đối Tác Chất Lượng',
            'qualityPartnersDesc': 'Làm đại lý cho nhiều thương hiệu nguyên liệu nhựa nổi tiếng quốc tế',
            'qualityControl': 'Điều Kiểm Chất Lượng',
            'qualityControlDesc': 'Hệ thống kiểm soát chất lượng nghiêm ngặt để đảm bảo chất lượng sản phẩm ổn định và đáng tin cậy',
            'efficientLogistics': 'Vận Chuyển Hiệu Quả',
            'efficientLogisticsDesc': 'Hệ thống hậu cần hoàn thiện để đảm bảo giao hàng kịp thời và đáp ứng nhu cầu sản xuất của khách hàng',
            'professionalTeam': 'Đội Ngũ Chuyên Nghiệp',
            'professionalTeamDesc': 'Đội ngũ bán hàng và kỹ thuật giàu kinh nghiệm, cung cấp các giải pháp tùy chỉnh cho khách hàng',
            'importExport': 'Quyền Xuất Nhập Khẩu',
            'importExportDesc': 'Công ty sở hữu quyền xuất nhập khẩu độc lập, trực tiếp thương mại với các nhà cung cấp và khách hàng quốc tế',
            'productCenter': 'Trung Tâm Sản Phẩm',
            'industryApplications': 'Ứng Dụng Ngành Nghề',
            'aboutUs': 'Về Winzhuo International',
            'contactInfo': 'Thông Tin Liên Hệ',
            'address': 'Địa Chỉ',
            'phone': 'Điện Thoại',
            'email': 'Email',
            'workingHours': 'Giờ Làm Việc',
            'followUs': 'Theo Dõi Chúng Tôi',
            'quickLinks': 'Liên Kết Nhanh',
            'productCategories': 'Danh Mục Sản Phẩm',
            'engineeringPlastics': 'Nhựa Kỹ Thuật',
            'generalPlastics': 'Nhựa Chung',
            'biodegradablePlastics': 'Nhựa Có Thể Phân Hủy',
            'thermoplasticElastomers': 'Elastomer Nhiệt Dinh',
            'specialtyMaterials': 'Vật Liệu Đặc Thù',
            'copyright': '© 2026 Winzhuo International. Tất cả các quyền được bảo lưu.',
            'about-description-1': 'Công ty TNHH Thương mại Quốc tế Winzhuo Hong Kong được thành lập vào năm 2009, chuyên从事 buôn bán nguyên liệu nhựa và đại lý thương hiệu nước ngoài. Có trụ sở chính tại Hồng Kông, công ty có văn phòng và trung tâm kho lưu trữ tại Trung Quốc nội địa, Đông Nam Á và các nơi khác.',
            'about-description-2': 'Nhiều năm qua, chúng tôi luôn tuân thủ triết lý kinh doanh "chất lượng đầu tiên, khách hàng trên hết", cung cấp cho khách hàng sản phẩm chất lượng cao và dịch vụ chuyên nghiệp. Chúng tôi đã thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế, làm đại lý bán nguyên liệu nhựa từ nhiều thương hiệu nổi tiếng quốc tế, đồng thời hợp tác với các nhà sản xuất chất lượng để phát triển các sản phẩm được tùy chỉnh.',
            'about-description-3': 'Sản phẩm của chúng tôi được sử dụng rộng rãi trong các ngành điện tử, ô tô, thiết bị gia dụng, y tế, đóng gói và các ngành khác, phục vụ hơn 500 khách hàng toàn cầu, và đã giành được niềm tin của khách hàng với dịch vụ chuyên nghiệp và sản phẩm chất lượng cao.',
            'about-learn-more': 'Tìm Hiểu Thêm',
            'news-read-more': 'Đọc Thêm',
            'pagination-prev': 'Trang Trước',
            'pagination-next': 'Trang Sau',
            'news-20251230-title': 'Winzhuo International Tham gia Hội nghị Đỉnh cao Ngành Nguyên liệu Nhựa 2025',
            'news-20251230-content': 'Ngày 30 tháng 12, Winzhuo International đã tham gia Hội nghị Đỉnh cao Ngành Nguyên liệu Nhựa 2025 được tổ chức tại Thâm Quyến, gặp gỡ với nhiều chuyên gia ngành và đại diện nhà sản xuất để thảo luận về xu hướng phát triển và hướng đi tương lai của ngành nguyên liệu nhựa, tìm kiếm thêm cơ hội hợp tác với các nhà sản xuất chất lượng cao.',
            'news-20251215-title': 'Winzhuo International Ký thỏa thuận hợp tác chiến lược với BASF',
            'news-20251215-content': 'Ngày 15 tháng 12, Winzhuo International đã ký thỏa thuận hợp tác chiến lược với BASF, một công ty hóa học hàng đầu toàn cầu. Là đối tác thương mại chất lượng cao của BASF, Winzhuo International sẽ cung cấp cho khách hàng nguồn cung nguyên liệu nhựa kỹ thuật ổn định và chất lượng cao hơn.',
            'news-20251120-title': 'Winzhuo International Ra mắt sản phẩm nhựa có thể phân hủy sinh học mới cùng các nhà sản xuất hợp tác',
            'news-20251120-content': 'Ngày 20 tháng 11, Winzhuo International đã hợp tác với các nhà sản xuất chất lượng cao để ra mắt sản phẩm nhựa có thể phân hủy sinh học mới. Những sản phẩm này áp dụng công nghệ phân hủy sinh học mới nhất, có hiệu suất phân hủy và hiệu suất sử dụng xuất sắc, có thể được áp dụng rộng rãi trong đóng gói, sản phẩm dùng một lần và các lĩnh vực khác.',
            'news-20251015-title': 'Winzhuo International Đạt danh hiệu "Nhà Cung cấp Nguyên liệu Nhựa Tốt Nhất Năm 2025"',
            'news-20251015-content': 'Ngày 15 tháng 10, trong cuộc bình chọn ngành năm 2025 do Hội Nghiệp đoàn Cơ khí Sản xuất Nhựa Trung Quốc tổ chức, Winzhuo International đã giành được danh hiệu "Nhà Cung cấp Nguyên liệu Nhựa Tốt Nhất Năm 2025" nhờ chất lượng sản phẩm xuất sắc, quản lý chuỗi cung ứng hoàn thiện và dịch vụ khách hàng tận tâm.',
            'news-20250910-title': 'Điểm Liên lạc Huizhou của Winzhuo International Chính thức Thành lập',
            'news-20250910-content': 'Ngày 10 tháng 9, điểm liên lạc Huizhou của Winzhuo International đã chính thức thành lập. Đây là một bố trí quan trọng khác của Winzhuo International tại miền Nam Trung Quốc, sẽ进一一步 củng cố hợp tác của công ty với các nhà sản xuất tại vùng châu thổ sông Châu Pha Lạp và nâng cao khả năng phục vụ thị trường.',
            'news-20250825-title': 'Winzhuo International Tham gia Triển lãm Nhựa Quốc tế Trung Quốc 2025',
            'news-20250825-content': 'Ngày 25 tháng 8, Winzhuo International đã tham gia Triển lãm Nhựa Quốc tế Trung Quốc 2025 được tổ chức tại Thượng Hải, giới thiệu các sản phẩm nguyên liệu nhựa và giải pháp được phát triển cùng các nhà sản xuất hợp tác, thu hút sự quan tâm của nhiều khách hàng ngành.',
            'news-20250718-title': 'Winzhuo International Đạt được hợp tác sâu rộng với Dow Chemical',
            'news-20250718-content': 'Ngày 18 tháng 7, Winzhuo International đã đạt được thỏa thuận hợp tác sâu rộng với Dow Chemical, một công ty hóa học hàng đầu toàn cầu. Là đối tác thương mại được ủy quyền của Dow Chemical, Winzhuo International sẽ cung cấp cho khách hàng các giải pháp nhựa tổng quát và nhựa kỹ thuật toàn diện hơn.',
            'news-20250630-title': 'Winzhuo International Ra mắt dòng sản phẩm elastomer nhiệt dính mới cùng các nhà sản xuất hợp tác',
            'news-20250630-content': 'Ngày 30 tháng 6, Winzhuo International đã hợp tác với các nhà sản xuất chất lượng cao để ra mắt một dòng sản phẩm elastomer nhiệt dính mới. Dòng sản phẩm này có độ đàn hồi, chống mài mòn và chống dầu xuất sắc, có thể được áp dụng rộng rãi trong ô tô, điện tử, y tế và các lĩnh vực khác.',
            'news-20250615-title': 'Winzhuo International Xuất hiện tại Triển lãm cao su và nhựa quốc tế Quảng Châu 2025',
            'news-20250615-content': 'Ngày 15 tháng 6, Winzhuo International đã tham gia Triển lãm cao su và nhựa quốc tế 2025 được tổ chức tại Quảng Châu, giới thiệu nhựa kỹ thuật và sản phẩm nhựa có thể phân hủy sinh học được phát triển cùng các nhà sản xuất hợp tác,受到 nhiều khách hàng ưa chuộng.',
            'news-20250515-title': 'Văn phòng Quảng Châu của Winzhuo International Hoàn thành điều chỉnh tối ưu',
            'news-20250515-content': 'Ngày 15 tháng 5, quá trình điều chỉnh tối ưu văn phòng Quảng Châu của Winzhuo International đã hoàn thành,进一一步 nâng cao hiệu quả làm việc và khả năng phục vụ, phục vụ tốt hơn cho khách hàng địa phương và các nhà sản xuất hợp tác.',
            'news-20250420-title': 'Winzhuo International Đạt chứng chỉ "Nhà Cung cấp Xanh"',
            'news-20250420-content': 'Ngày 20 tháng 4, Winzhuo International đã nhận chứng chỉ "Nhà Cung cấp Xanh" do Hội Liên hiệp Bảo vệ Môi trường Trung Quốc ban phát. Đây là sự đánh giá dương về nỗ lực của công ty trong việc cung cấp nguyên liệu nhựa bảo vệ môi trường, cũng như một thành果 quan trọng của chiến lược phát triển bền vững của công ty.',
            'news-20250410-title': 'Winzhuo International Tham gia Triển lãm Vật liệu mới Nhựa Quốc tế Thâm Quyến 2025',
            'news-20250410-content': 'Ngày 10 tháng 4, Winzhuo International đã tham gia Triển lãm Vật liệu mới Nhựa Quốc tế 2025 được tổ chức tại Thâm Quyến, tập trung giới thiệu dòng sản phẩm elastomer nhiệt dính và vật liệu đặc biệt được phát triển cùng các nhà sản xuất hợp tác, và thiết lập liên lạc với nhiều khách hàng tiềm năng.'
        }
    },
    
    // 初始化
    init: function() {
        this.addLanguageSelectorListener();
        this.loadSavedLanguage();
        this.updateContent();
    },
    
    // 添加语言选择器事件监听器
    addLanguageSelectorListener: function() {
        // 获取现有的语言选择器
        const select = document.getElementById('language-select');
        if (select) {
            // 添加事件监听器
            select.addEventListener('change', (e) => {
                this.switchLanguage(e.target.value);
            });
        }
    },
    
    // 加载保存的语言
    loadSavedLanguage: function() {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && this.languages[savedLanguage]) {
            this.currentLanguage = savedLanguage;
            const select = document.getElementById('language-select');
            if (select) {
                select.value = savedLanguage;
            }
        }
    },
    
    // 切换语言
    switchLanguage: function(language) {
        if (this.languages[language]) {
            this.currentLanguage = language;
            localStorage.setItem('language', language);
            this.updateContent();
        }
    },
    
    // 更新内容
    updateContent: function() {
        const lang = this.currentLanguage;
        const translations = this.translations[lang];
        
        // 更新导航栏
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (href.includes('index.html')) {
                link.textContent = translations.home;
            } else if (href.includes('about.html')) {
                link.textContent = translations.about;
            } else if (href.includes('products.html')) {
                link.textContent = translations.products;
            } else if (href.includes('industries.html')) {
                link.textContent = translations.industries;
            } else if (href.includes('cases.html')) {
                link.textContent = translations.cases;
            } else if (href.includes('brands.html')) {
                link.textContent = translations.brands;
            } else if (href.includes('services.html')) {
                link.textContent = translations.services;
            } else if (href.includes('news.html')) {
                link.textContent = translations.news;
            } else if (href.includes('contact.html')) {
                link.textContent = translations.contact;
            }
        });
        
        // 更新页脚链接
        document.querySelectorAll('.footer-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (href.includes('index.html')) {
                link.textContent = translations.home;
            } else if (href.includes('about.html')) {
                link.textContent = translations.about;
            } else if (href.includes('products.html')) {
                link.textContent = translations.products;
            } else if (href.includes('industries.html')) {
                link.textContent = translations.industries;
            } else if (href.includes('cases.html')) {
                link.textContent = translations.cases;
            } else if (href.includes('brands.html')) {
                link.textContent = translations.brands;
            } else if (href.includes('services.html')) {
                link.textContent = translations.services;
            } else if (href.includes('news.html')) {
                link.textContent = translations.news;
            } else if (href.includes('contact.html')) {
                link.textContent = translations.contact;
            }
        });
        
        // 更新产品分类和社交媒体标题
        document.querySelectorAll('.footer-links h4, .footer-social h4').forEach(header => {
            if (header.textContent === '产品分类' || header.textContent === '產品分類') {
                header.textContent = translations.productCategories;
            } else if (header.textContent === '快速链接' || header.textContent === '快速鏈接') {
                header.textContent = translations.quickLinks;
            } else if (header.textContent === '關注我們' || header.textContent === 'Follow Us' || header.textContent === 'Theo Dõi Chúng Tôi') {
                header.textContent = translations.followUs;
            }
        });
        
        // 更新产品分类链接
        const productCategoryLinks = document.querySelectorAll('.footer-links ul')[1]?.querySelectorAll('li a');
        if (productCategoryLinks) {
            productCategoryLinks[0].textContent = translations.engineeringPlastics;
            productCategoryLinks[1].textContent = translations.generalPlastics;
            productCategoryLinks[2].textContent = translations.biodegradablePlastics;
            productCategoryLinks[3].textContent = translations.thermoplasticElastomers;
            productCategoryLinks[4].textContent = translations.specialtyMaterials;
        }
        
        // 更新社交媒体链接
        const socialLinks = document.querySelectorAll('.footer-social ul li a');
        if (socialLinks) {
            socialLinks.forEach(link => {
                const icon = link.querySelector('i');
                if (icon) {
                    if (icon.classList.contains('fa-weixin')) {
                        link.textContent = ' ';
                        link.appendChild(icon);
                        link.innerHTML += ' ' + (lang === 'zh' ? '微信' : lang === 'en' ? 'WeChat' : 'WeChat');
                    } else if (icon.classList.contains('fa-weibo')) {
                        link.textContent = ' ';
                        link.appendChild(icon);
                        link.innerHTML += ' ' + (lang === 'zh' ? '微博' : lang === 'en' ? 'Weibo' : 'Weibo');
                    } else if (icon.classList.contains('fa-qq')) {
                        link.textContent = ' ';
                        link.appendChild(icon);
                        link.innerHTML += ' ' + (lang === 'zh' ? 'QQ' : lang === 'en' ? 'QQ' : 'QQ');
                    } else if (icon.classList.contains('fa-whatsapp')) {
                        link.textContent = ' ';
                        link.appendChild(icon);
                        link.innerHTML += ' ' + (lang === 'zh' ? 'WhatsApp' : lang === 'en' ? 'WhatsApp' : 'WhatsApp');
                    } else if (icon.classList.contains('fa-telegram')) {
                        link.textContent = ' ';
                        link.appendChild(icon);
                        link.innerHTML += ' ' + (lang === 'zh' ? 'Telegram' : lang === 'en' ? 'Telegram' : 'Telegram');
                    }
                }
            });
        }
        
        // 更新首页内容
        const hero = document.querySelector('.hero');
        if (hero) {
            const h1 = hero.querySelector('h1');
            const p = hero.querySelector('p');
            const buttons = hero.querySelectorAll('.btn');
            
            if (h1) h1.textContent = translations.welcome;
            if (p) p.textContent = translations.intro;
            if (buttons.length > 0) buttons[0].textContent = translations.browseProducts;
            if (buttons.length > 1) buttons[1].textContent = translations.contactUs;
        }
        
        // 更新优势部分
        const features = document.querySelector('.features');
        if (features) {
            const h2 = features.querySelector('h2');
            if (h2) h2.textContent = translations.ourAdvantages;
            
            const featureCards = features.querySelectorAll('.feature-card');
            if (featureCards.length > 0) {
                featureCards[0].querySelector('h3').textContent = translations.yearsExperience;
                featureCards[0].querySelector('p').textContent = translations.yearsExperienceDesc;
            }
            if (featureCards.length > 1) {
                featureCards[1].querySelector('h3').textContent = translations.globalNetwork;
                featureCards[1].querySelector('p').textContent = translations.globalNetworkDesc;
            }
            if (featureCards.length > 2) {
                featureCards[2].querySelector('h3').textContent = translations.qualityPartners;
                featureCards[2].querySelector('p').textContent = translations.qualityPartnersDesc;
            }
            if (featureCards.length > 3) {
                featureCards[3].querySelector('h3').textContent = translations.qualityControl;
                featureCards[3].querySelector('p').textContent = translations.qualityControlDesc;
            }
            if (featureCards.length > 4) {
                featureCards[4].querySelector('h3').textContent = translations.efficientLogistics;
                featureCards[4].querySelector('p').textContent = translations.efficientLogisticsDesc;
            }
            if (featureCards.length > 5) {
                featureCards[5].querySelector('h3').textContent = translations.professionalTeam;
                featureCards[5].querySelector('p').textContent = translations.professionalTeamDesc;
            }
            if (featureCards.length > 6) {
                featureCards[6].querySelector('h3').textContent = translations.importExport;
                featureCards[6].querySelector('p').textContent = translations.importExportDesc;
            }
        }
        
        // 更新产品部分
        const products = document.querySelector('.products');
        if (products) {
            const h2 = products.querySelector('h2');
            if (h2) h2.textContent = translations.productCenter;
        }
        
        // 更新行业应用部分
        const industries = document.querySelector('.industries');
        if (industries) {
            const h2 = industries.querySelector('h2');
            if (h2) h2.textContent = translations.industryApplications;
        }
        
        // 更新首页的应用案例
        const industryCards = document.querySelectorAll('.industry-card');
        if (industryCards.length > 0) {
            // 汽车内饰件
            if (industryCards[0]) {
                const h3 = industryCards[0].querySelector('h3');
                const p = industryCards[0].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '汽車內飾件' : lang === 'en' ? 'Automotive Interior Parts' : 'Các Bộ Phận Nội Thất Ô Tô';
                if (p) p.textContent = lang === 'zh' ? '為知名汽車製造商提供高品質的PP和ABS原料，用於生產儀表板、門板等內飾件，具有優異的耐熱性和耐磨性。' : lang === 'en' ? 'Provided high-quality PP and ABS raw materials for well-known automotive manufacturers, used in the production of instrument panels, door panels and other interior parts, with excellent heat resistance and wear resistance.' : 'Cung cấp nguyên liệu PP và ABS chất lượng cao cho các nhà sản xuất ô tô nổi tiếng, được sử dụng trong sản xuất bảng điều khiển, bảng cửa và các bộ phận nội thất khác, với khả năng chịu nhiệt và chống mài mòn xuất sắc.';
            }
            // 家电外壳组件
            if (industryCards[1]) {
                const h3 = industryCards[1].querySelector('h3');
                const p = industryCards[1].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '家電外殼組件' : lang === 'en' ? 'Home Appliance Housing Components' : 'Thành Phần Vỏ Thiết Bị Gia Dụng';
                if (p) p.textContent = lang === 'zh' ? '為家電品牌提供HIPS和ABS原料，用於生產電視機、洗衣機等家電外殼，具有良好的外觀和耐老化性能。' : lang === 'en' ? 'Provided HIPS and ABS raw materials for home appliance brands, used in the production of TV, washing machine and other home appliance housings, with good appearance and aging resistance.' : 'Cung cấp nguyên liệu HIPS và ABS cho các thương hiệu thiết bị gia dụng, được sử dụng trong sản xuất vỏ TV, máy giặt và các thiết bị gia dụng khác, với ngoại hình đẹp và khả năng chống lão hóa tốt.';
            }
            // 电子连接器外壳
            if (industryCards[2]) {
                const h3 = industryCards[2].querySelector('h3');
                const p = industryCards[2].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '電子連接器外殼' : lang === 'en' ? 'Electronic Connector Housing' : 'Vỏ Connector Điện Tử';
                if (p) p.textContent = lang === 'zh' ? '為電子製造商提供LCP和PBT原料，用於生產高精度電子連接器外殼，具有優異的尺寸穩定性和電絕緣性能。' : lang === 'en' ? 'Provided LCP and PBT raw materials for electronic manufacturers, used in the production of high-precision electronic connector housings, with excellent dimensional stability and electrical insulation performance.' : 'Cung cấp nguyên liệu LCP và PBT cho các nhà sản xuất điện tử, được sử dụng trong sản xuất vỏ connector điện tử có độ chính xác cao, với ổn định kích thước và hiệu suất cách điện tuyệt vời.';
            }
            // 医疗设备外壳
            if (industryCards[3]) {
                const h3 = industryCards[3].querySelector('h3');
                const p = industryCards[3].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '醫療設備外殼' : lang === 'en' ? 'Medical Equipment Housing' : 'Vỏ Thiết Bị Y Tế';
                if (p) p.textContent = lang === 'zh' ? '為醫療設備製造商提供PEEK原料，用於生產醫療設備外殼，具有優異的生物相容性和耐消毒性能。' : lang === 'en' ? 'Provided PEEK raw materials for medical equipment manufacturers, used in the production of medical equipment housings, with excellent biocompatibility and disinfection resistance.' : 'Cung cấp nguyên liệu PEEK cho các nhà sản xuất thiết bị y tế, được sử dụng trong sản xuất vỏ thiết bị y tế, với tương thích sinh học và khả năng chống khử trùng tuyệt vời.';
            }
            // 食品包装容器
            if (industryCards[4]) {
                const h3 = industryCards[4].querySelector('h3');
                const p = industryCards[4].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '食品包裝容器' : lang === 'en' ? 'Food Packaging Containers' : 'Container Đóng Gói Thực Phẩm';
                if (p) p.textContent = lang === 'zh' ? '為包裝製造商提供PP和PET原料，用於生產食品包裝容器，具有良好的透明度和食品安全性能。' : lang === 'en' ? 'Provided PP and PET raw materials for packaging manufacturers, used in the production of food packaging containers, with good transparency and food safety performance.' : 'Cung cấp nguyên liệu PP và PET cho các nhà sản xuất đóng gói, được sử dụng trong sản xuất container đóng gói thực phẩm, với độ trong suốt tốt và hiệu suất an toàn thực phẩm.';
            }
            // 建筑装饰材料
            if (industryCards[5]) {
                const h3 = industryCards[5].querySelector('h3');
                const p = industryCards[5].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '建築裝飾材料' : lang === 'en' ? 'Building Decorative Materials' : 'Vật Liệu Trang Trí Xây Dựng';
                if (p) p.textContent = lang === 'zh' ? '為建築材料製造商提供PVC和ASA原料，用於生產建築裝飾材料，具有優異的耐候性和抗老化性能。' : lang === 'en' ? 'Provided PVC and ASA raw materials for building material manufacturers, used in the production of building decorative materials, with excellent weather resistance and aging resistance.' : 'Cung cấp nguyên liệu PVC và ASA cho các nhà sản xuất vật liệu xây dựng, được sử dụng trong sản xuất vật liệu trang trí xây dựng, với khả năng chịu thời tiết và chống lão hóa tuyệt vời.';
            }
            // LED灯具外壳
            if (industryCards[6]) {
                const h3 = industryCards[6].querySelector('h3');
                const p = industryCards[6].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? 'LED燈具外殼' : lang === 'en' ? 'LED Lighting Housing' : 'Vỏ Đèn LED';
                if (p) p.textContent = lang === 'zh' ? '為照明設備製造商提供PC和ABS原料，用於生產LED燈具外殼，具有優異的耐熱性、阻燃性和透明度。' : lang === 'en' ? 'Provided PC and ABS raw materials for lighting equipment manufacturers, used in the production of LED lighting housings, with excellent heat resistance, flame retardancy and transparency.' : 'Cung cấp nguyên liệu PC và ABS cho các nhà sản xuất thiết bị chiếu sáng, được sử dụng trong sản xuất vỏ đèn LED, với khả năng chịu nhiệt, chống cháy và độ trong suốt tuyệt vời.';
            }
            // 一次性包装盒
            if (industryCards[7]) {
                const h3 = industryCards[7].querySelector('h3');
                const p = industryCards[7].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '一次性包裝盒' : lang === 'en' ? 'Disposable Packaging Boxes' : 'Hộp Đóng Gói Một Lần';
                if (p) p.textContent = lang === 'zh' ? '為食品包裝企業提供PP和PS原料，用於生產一次性餐盒和食品包裝容器，具有良好的耐熱性和食品安全性能。' : lang === 'en' ? 'Provided PP and PS raw materials for food packaging companies, used in the production of disposable lunch boxes and food packaging containers, with good heat resistance and food safety performance.' : 'Cung cấp nguyên liệu PP và PS cho các công ty đóng gói thực phẩm, được sử dụng trong sản xuất hộp cơm một lần và container đóng gói thực phẩm, với khả năng chịu nhiệt và an toàn thực phẩm tốt.';
            }
            // 更新查看更多按钮
            const moreBtn = document.querySelector('.industries .btn');
            if (moreBtn) {
                moreBtn.textContent = lang === 'zh' ? '查看更多案例' : lang === 'en' ? 'View More Cases' : 'Xem Thêm Các Trường Hợp';
            }
        }
        
        // 更新首页的产品卡片
        const productCards = document.querySelectorAll('.product-card');
        if (productCards.length > 0) {
            // 聚碳酸酯 (PC)
            if (productCards[0]) {
                const h3 = productCards[0].querySelector('h3');
                const p = productCards[0].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '聚碳酸酯 (PC)' : lang === 'en' ? 'Polycarbonate (PC)' : 'Polycarbonate (PC)';
                if (p) p.textContent = lang === 'zh' ? '工程塑料，具有優異的透明度和衝擊強度' : lang === 'en' ? 'Engineering plastic with excellent transparency and impact strength' : 'Nhựa kỹ thuật với độ trong suốt và cường độ chống xung đột tuyệt vời';
            }
            // 尼龙 6 (PA6)
            if (productCards[1]) {
                const h3 = productCards[1].querySelector('h3');
                const p = productCards[1].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '尼龍 6 (PA6)' : lang === 'en' ? 'Nylon 6 (PA6)' : 'Nylon 6 (PA6)';
                if (p) p.textContent = lang === 'zh' ? '工程塑料，高強度、耐磨、耐油' : lang === 'en' ? 'Engineering plastic with high strength, wear resistance and oil resistance' : 'Nhựa kỹ thuật với cường độ cao, chống mài mòn và chống dầu';
            }
            // 聚丙烯 (PP)
            if (productCards[2]) {
                const h3 = productCards[2].querySelector('h3');
                const p = productCards[2].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '聚丙烯 (PP)' : lang === 'en' ? 'Polypropylene (PP)' : 'Polypropylene (PP)';
                if (p) p.textContent = lang === 'zh' ? '通用塑料，具有良好的耐化學性和加工性能' : lang === 'en' ? 'General plastic with good chemical resistance and processability' : 'Nhựa chung với tính chống hóa học và khả năng chế biến tốt';
            }
            // 丙烯腈-丁二烯-苯乙烯 (ABS)
            if (productCards[3]) {
                const h3 = productCards[3].querySelector('h3');
                const p = productCards[3].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '丙烯腈-丁二烯-苯乙烯 (ABS)' : lang === 'en' ? 'Acrylonitrile Butadiene Styrene (ABS)' : 'Acrylonitrile Butadiene Styrene (ABS)';
                if (p) p.textContent = lang === 'zh' ? '通用塑料，具有良好的衝擊強度和耐熱性' : lang === 'en' ? 'General plastic with good impact strength and heat resistance' : 'Nhựa chung với cường độ chống xung đột và chịu nhiệt tốt';
            }
            // 聚乳酸 (PLA)
            if (productCards[4]) {
                const h3 = productCards[4].querySelector('h3');
                const p = productCards[4].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '聚乳酸 (PLA)' : lang === 'en' ? 'Polylactic Acid (PLA)' : 'Polylactic Acid (PLA)';
                if (p) p.textContent = lang === 'zh' ? '可降解塑料，環保可持續' : lang === 'en' ? 'Biodegradable plastic, environmentally sustainable' : 'Nhựa có thể phân hủy, bền vững với môi trường';
            }
            // 热塑性弹性体 (TPE)
            if (productCards[5]) {
                const h3 = productCards[5].querySelector('h3');
                const p = productCards[5].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '熱塑性彈性體 (TPE)' : lang === 'en' ? 'Thermoplastic Elastomer (TPE)' : 'Thermoplastic Elastomer (TPE)';
                if (p) p.textContent = lang === 'zh' ? 'WinFlex自主品牌，具有良好的彈性和加工性能' : lang === 'en' ? 'WinFlex own brand with good elasticity and processability' : 'Thương hiệu WinFlex với độ đàn hồi và khả năng chế biến tốt';
            }
            // 聚醚醚酮 (PEEK)
            if (productCards[6]) {
                const h3 = productCards[6].querySelector('h3');
                const p = productCards[6].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '聚醚醚酮 (PEEK)' : lang === 'en' ? 'Polyether Ether Ketone (PEEK)' : 'Polyether Ether Ketone (PEEK)';
                if (p) p.textContent = lang === 'zh' ? '特種材料，耐高溫、高強度、耐腐蝕' : lang === 'en' ? 'Specialty material with high temperature resistance, high strength and corrosion resistance' : 'Vật liệu đặc biệt với chịu nhiệt cao, cường độ cao và chống ăn mòn';
            }
            // 聚苯硫醚 (PPS)
            if (productCards[7]) {
                const h3 = productCards[7].querySelector('h3');
                const p = productCards[7].querySelector('p');
                if (h3) h3.textContent = lang === 'zh' ? '聚苯硫醚 (PPS)' : lang === 'en' ? 'Polyphenylene Sulfide (PPS)' : 'Polyphenylene Sulfide (PPS)';
                if (p) p.textContent = lang === 'zh' ? '特種材料，耐高溫、耐化學腐蝕性和阻燃性' : lang === 'en' ? 'Specialty material with high temperature resistance, chemical corrosion resistance and flame retardancy' : 'Vật liệu đặc biệt với chịu nhiệt cao, chống ăn mòn hóa học và chống cháy';
            }
            // 更新查看全部产品按钮
            const productBtn = document.querySelector('.products .btn');
            if (productBtn) {
                productBtn.textContent = lang === 'zh' ? '查看全部產品' : lang === 'en' ? 'View All Products' : 'Xem Tất Cả Sản Phẩm';
            }
        }
        
        // 更新关于我们部分
        const about = document.querySelector('.about');
        if (about) {
            const h2 = about.querySelector('h2');
            if (h2) h2.textContent = translations.aboutUs;
        }
        
        // 更新联系我们部分
        const contact = document.querySelector('.contact');
        if (contact) {
            const h2 = contact.querySelector('h2');
            if (h2) h2.textContent = translations.contact;
            const p = contact.querySelector('p');
            if (p) p.textContent = lang === 'zh' ? '如果您有任何問題或需求，歡迎隨時聯繫我們' : lang === 'en' ? 'If you have any questions or needs, please feel free to contact us' : 'Nếu bạn có bất kỳ câu hỏi hoặc nhu cầu nào, vui lòng liên hệ với chúng tôi';
        }
        
        // 更新data-lang属性内容
        document.querySelectorAll('[data-lang]').forEach(element => {
            const langKey = element.getAttribute('data-lang');
            if (langKey === 'hero-title') {
                element.textContent = translations.welcome;
            } else if (langKey === 'hero-subtitle') {
                element.textContent = translations.intro;
            } else if (langKey === 'features-title') {
                element.textContent = translations.ourAdvantages;
            } else if (langKey === 'feature-1') {
                element.textContent = translations.yearsExperience;
            } else if (langKey === 'feature-1-desc') {
                element.textContent = translations.yearsExperienceDesc;
            } else if (langKey === 'feature-2') {
                element.textContent = translations.globalNetwork;
            } else if (langKey === 'feature-2-desc') {
                element.textContent = translations.globalNetworkDesc;
            } else if (langKey === 'feature-3') {
                element.textContent = translations.qualityPartners;
            } else if (langKey === 'feature-3-desc') {
                element.textContent = translations.qualityPartnersDesc;
            } else if (langKey === 'feature-4') {
                element.textContent = translations.qualityControl;
            } else if (langKey === 'feature-4-desc') {
                element.textContent = translations.qualityControlDesc;
            } else if (langKey === 'feature-5') {
                element.textContent = translations.efficientLogistics;
            } else if (langKey === 'feature-5-desc') {
                element.textContent = translations.efficientLogisticsDesc;
            } else if (langKey === 'feature-6') {
                element.textContent = translations.professionalTeam;
            } else if (langKey === 'feature-6-desc') {
                element.textContent = translations.professionalTeamDesc;
            } else if (langKey === 'feature-7') {
                element.textContent = translations.importExport;
            } else if (langKey === 'feature-7-desc') {
                element.textContent = translations.importExportDesc;
            } else if (langKey === 'products-title') {
                element.textContent = translations.productCenter;
            } else if (langKey === 'industries-title') {
                element.textContent = translations.industryApplications;
            } else if (langKey === 'about-title') {
                element.textContent = translations.aboutUs;
            } else if (langKey === 'contact-title') {
                element.textContent = translations.contact;
            } else if (langKey === 'contact-subtitle') {
                element.textContent = lang === 'zh' ? '如果您有任何問題或需求，歡迎隨時聯繫我們' : lang === 'en' ? 'If you have any questions or needs, please feel free to contact us' : 'Nếu bạn có bất kỳ câu hỏi hoặc nhu cầu nào, vui lòng liên hệ với chúng tôi';
            } else if (langKey === 'about-us') {
                element.textContent = translations.about;
            } else if (langKey === 'products') {
                element.textContent = translations.products;
            } else if (langKey === 'industries') {
                element.textContent = translations.industries;
            } else if (langKey === 'cases') {
                element.textContent = translations.cases;
            } else if (langKey === 'brands') {
                element.textContent = translations.brands;
            } else if (langKey === 'services') {
                element.textContent = translations.services;
            } else if (langKey === 'news') {
                element.textContent = translations.news;
            } else if (langKey === 'contact') {
                element.textContent = translations.contact;
            } else if (langKey === 'about-us-subtitle') {
                element.textContent = lang === 'zh' ? '專業可靠的塑膠原料供應商' : lang === 'en' ? 'Professional and Reliable Plastic Raw Material Supplier' : 'Nhà Cung Cấp Nguyên Liệu Nhựa Chuyên Nghiệp Và Tin Cậy';
            } else if (langKey === 'products-subtitle') {
                element.textContent = lang === 'zh' ? '專業代理全球優質塑膠原料' : lang === 'en' ? 'Professional agent for global high-quality plastic raw materials' : 'Đại lý chuyên nghiệp cho nguyên liệu nhựa chất lượng toàn cầu';
            } else if (langKey === 'industries-subtitle') {
                element.textContent = lang === 'zh' ? '塑膠原料在各個行業的應用' : lang === 'en' ? 'Applications of plastic raw materials in various industries' : 'Ứng dụng của nguyên liệu nhựa trong các ngành nghề';
            } else if (langKey === 'cases-subtitle') {
                element.textContent = lang === 'zh' ? '塑膠原料的實際應用案例' : lang === 'en' ? 'Practical application cases of plastic raw materials' : 'Các trường hợp ứng dụng thực tế của nguyên liệu nhựa';
            } else if (langKey === 'brands-subtitle') {
                element.textContent = lang === 'zh' ? '我們的合作品牌' : lang === 'en' ? 'Our cooperative brands' : 'Các thương hiệu hợp tác của chúng tôi';
            } else if (langKey === 'services-subtitle') {
                element.textContent = lang === 'zh' ? '專業的塑膠原料解決方案' : lang === 'en' ? 'Professional plastic raw material solutions' : 'Giải pháp nguyên liệu nhựa chuyên nghiệp';
            } else if (langKey === 'news-subtitle') {
                element.textContent = lang === 'zh' ? '公司新聞和行業資訊' : lang === 'en' ? 'Company news and industry information' : 'Tin tức công ty và thông tin ngành';
            } else if (langKey === 'about-description-1') {
                element.textContent = translations['about-description-1'];
            } else if (langKey === 'about-description-2') {
                element.textContent = translations['about-description-2'];
            } else if (langKey === 'about-description-3') {
                element.textContent = translations['about-description-3'];
            } else if (langKey === 'about-learn-more') {
                element.textContent = translations['about-learn-more'];
            } else if (langKey === 'news-read-more') {
                element.textContent = translations['news-read-more'];
            } else if (langKey === 'pagination-prev') {
                element.textContent = translations['pagination-prev'];
            } else if (langKey === 'pagination-next') {
                element.textContent = translations['pagination-next'];
            } else if (langKey === 'news-20251230-title') {
                element.textContent = translations['news-20251230-title'];
            } else if (langKey === 'news-20251230-content') {
                element.textContent = translations['news-20251230-content'];
            } else if (langKey === 'news-20251215-title') {
                element.textContent = translations['news-20251215-title'];
            } else if (langKey === 'news-20251215-content') {
                element.textContent = translations['news-20251215-content'];
            } else if (langKey === 'news-20251120-title') {
                element.textContent = translations['news-20251120-title'];
            } else if (langKey === 'news-20251120-content') {
                element.textContent = translations['news-20251120-content'];
            } else if (langKey === 'news-20251015-title') {
                element.textContent = translations['news-20251015-title'];
            } else if (langKey === 'news-20251015-content') {
                element.textContent = translations['news-20251015-content'];
            } else if (langKey === 'news-20250910-title') {
                element.textContent = translations['news-20250910-title'];
            } else if (langKey === 'news-20250910-content') {
                element.textContent = translations['news-20250910-content'];
            } else if (langKey === 'news-20250825-title') {
                element.textContent = translations['news-20250825-title'];
            } else if (langKey === 'news-20250825-content') {
                element.textContent = translations['news-20250825-content'];
            } else if (langKey === 'news-20250718-title') {
                element.textContent = translations['news-20250718-title'];
            } else if (langKey === 'news-20250718-content') {
                element.textContent = translations['news-20250718-content'];
            } else if (langKey === 'news-20250630-title') {
                element.textContent = translations['news-20250630-title'];
            } else if (langKey === 'news-20250630-content') {
                element.textContent = translations['news-20250630-content'];
            } else if (langKey === 'news-20250615-title') {
                element.textContent = translations['news-20250615-title'];
            } else if (langKey === 'news-20250615-content') {
                element.textContent = translations['news-20250615-content'];
            } else if (langKey === 'news-20250515-title') {
                element.textContent = translations['news-20250515-title'];
            } else if (langKey === 'news-20250515-content') {
                element.textContent = translations['news-20250515-content'];
            } else if (langKey === 'news-20250420-title') {
                element.textContent = translations['news-20250420-title'];
            } else if (langKey === 'news-20250420-content') {
                element.textContent = translations['news-20250420-content'];
            } else if (langKey === 'news-20250410-title') {
                element.textContent = translations['news-20250410-title'];
            } else if (langKey === 'news-20250410-content') {
                element.textContent = translations['news-20250410-content'];
            }
        });
        
        // 更新Banner内容（已通过data-lang处理）
        // Banner部分的内容已经通过上面的data-lang属性处理，这里不再重复处理
        
        // 更新页脚
        const footerInfo = document.querySelector('.footer-info');
        if (footerInfo) {
            const p = footerInfo.querySelector('p');
            if (p) {
                if (lang === 'zh') {
                    p.textContent = '專業可靠的塑膠原料供應商';
                } else if (lang === 'en') {
                    p.textContent = 'Professional and Reliable Plastic Raw Material Supplier';
                } else if (lang === 'vi') {
                    p.textContent = 'Nhà Cung Cấp Nguyên Liệu Nhựa Chuyên Nghiệp Và Tin Cậy';
                }
            }
        }
        
        // 更新版权信息
        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) {
            copyright.textContent = translations.copyright;
        }
        
        // 更新页面标题
        // 首先尝试选择inner-page部分的h1元素
        let pageTitle = document.querySelector('.inner-page h1');
        // 如果没有找到，再尝试选择页面中的第一个h1元素
        if (!pageTitle) {
            pageTitle = document.querySelector('h1');
        }
        if (pageTitle && !pageTitle.closest('.banner')) {
            if (pageTitle.textContent === '關於我們' || pageTitle.textContent === '关于我们') {
                pageTitle.textContent = translations.about;
            } else if (pageTitle.textContent === '產品中心' || pageTitle.textContent === '产品中心') {
                pageTitle.textContent = translations.products;
            } else if (pageTitle.textContent === '行業應用' || pageTitle.textContent === '行业应用') {
                pageTitle.textContent = translations.industries;
            } else if (pageTitle.textContent === '應用案例' || pageTitle.textContent === '应用案例') {
                pageTitle.textContent = translations.cases;
            } else if (pageTitle.textContent === '合作品牌' || pageTitle.textContent === '合作品牌') {
                pageTitle.textContent = translations.brands;
            } else if (pageTitle.textContent === '服務' || pageTitle.textContent === '服务' || pageTitle.textContent === '我們的服務' || pageTitle.textContent === '我们的服务') {
                pageTitle.textContent = translations.services;
            } else if (pageTitle.textContent === '新聞中心' || pageTitle.textContent === '新闻中心') {
                pageTitle.textContent = translations.news;
            } else if (pageTitle.textContent === '聯繫我們' || pageTitle.textContent === '联系我们') {
                pageTitle.textContent = translations.contact;
            }
        }
        
        // 更新按钮文本
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.textContent === '提交咨詢' || button.textContent === '提交咨询') {
                button.textContent = lang === 'zh' ? '提交咨詢' : lang === 'en' ? 'Submit Inquiry' : 'Gửi Yêu Cầu';
            } else if (button.textContent === '全部產品' || button.textContent === '全部产品') {
                button.textContent = lang === 'zh' ? '全部產品' : lang === 'en' ? 'All Products' : 'Tất Cả Sản Phẩm';
            } else if (button.textContent === '工程塑料' || button.textContent === '工程塑膠') {
                button.textContent = lang === 'zh' ? '工程塑膠' : lang === 'en' ? 'Engineering Plastics' : 'Nhựa Kỹ Thuật';
            } else if (button.textContent === '通用塑料' || button.textContent === '通用塑膠') {
                button.textContent = lang === 'zh' ? '通用塑膠' : lang === 'en' ? 'General Plastics' : 'Nhựa Chung';
            } else if (button.textContent === '可降解塑料' || button.textContent === '可降解塑膠') {
                button.textContent = lang === 'zh' ? '可降解塑膠' : lang === 'en' ? 'Biodegradable Plastics' : 'Nhựa Có Thể Phân Hủy';
            } else if (button.textContent === '熱塑性彈性體' || button.textContent === '热塑性弹性体') {
                button.textContent = lang === 'zh' ? '熱塑性彈性體' : lang === 'en' ? 'Thermoplastic Elastomers' : 'Elastomer Nhiệt Dinh';
            } else if (button.textContent === '特種材料' || button.textContent === '特种材料') {
                button.textContent = lang === 'zh' ? '特種材料' : lang === 'en' ? 'Specialty Materials' : 'Vật Liệu Đặc Thù';
            }
        });
        
        // 更新链接文本
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (link.textContent === '閱讀更多' || link.textContent === '阅读更多') {
                link.textContent = lang === 'zh' ? '閱讀更多' : lang === 'en' ? 'Read More' : 'Đọc Thêm';
            } else if (link.textContent === '上一頁' || link.textContent === '上一页') {
                link.textContent = lang === 'zh' ? '上一頁' : lang === 'en' ? 'Previous Page' : 'Trang Trước';
            } else if (link.textContent === '下一頁' || link.textContent === '下一页') {
                link.textContent = lang === 'zh' ? '下一頁' : lang === 'en' ? 'Next Page' : 'Trang Sau';
            } else if (link.textContent === '浏览产品') {
                link.textContent = lang === 'zh' ? '浏览产品' : lang === 'en' ? 'Browse Products' : 'Duyệt Sản Phẩm';
            } else if (link.textContent === '在线咨询') {
                link.textContent = lang === 'zh' ? '在线咨询' : lang === 'en' ? 'Online Consultation' : 'Tư Vấn Trực Tuyến';
            } else if (link.textContent === '查看更多案例') {
                link.textContent = lang === 'zh' ? '查看更多案例' : lang === 'en' ? 'View More Cases' : 'Xem Thêm Các Trường Hợp';
            }
        });
        
        // 更新行业应用页面的行业标题
        if (window.location.pathname.includes('industries.html')) {
            const industryTitles = document.querySelectorAll('.industry-detail h3');
            industryTitles.forEach((title, index) => {
                if (index === 0) {
                    title.textContent = lang === 'zh' ? '汽車行業' : lang === 'en' ? 'Automotive Industry' : 'Ngành Ô Tô';
                } else if (index === 1) {
                    title.textContent = lang === 'zh' ? '電子行業' : lang === 'en' ? 'Electronics Industry' : 'Ngành Điện Tử';
                } else if (index === 2) {
                    title.textContent = lang === 'zh' ? '家電行業' : lang === 'en' ? 'Home Appliances Industry' : 'Ngành Thiết Bị Gia Dụng';
                } else if (index === 3) {
                    title.textContent = lang === 'zh' ? '醫療行業' : lang === 'en' ? 'Medical Industry' : 'Ngành Y Tế';
                } else if (index === 4) {
                    title.textContent = lang === 'zh' ? '包裝行業' : lang === 'en' ? 'Packaging Industry' : 'Ngành Đóng Gói';
                } else if (index === 5) {
                    title.textContent = lang === 'zh' ? '建築行業' : lang === 'en' ? 'Construction Industry' : 'Ngành Xây Dựng';
                }
            });
        }
        
        // 更新服务页面的服务流程标题
        if (window.location.pathname.includes('services.html')) {
            const processTitles = document.querySelectorAll('.process-step h3');
            processTitles.forEach((title, index) => {
                if (index === 0) {
                    title.textContent = lang === 'zh' ? '需求溝通' : lang === 'en' ? 'Needs Communication' : 'Truyền Thông Nhu Cầu';
                } else if (index === 1) {
                    title.textContent = lang === 'zh' ? '產品推薦' : lang === 'en' ? 'Product Recommendation' : 'Giới Thiệu Sản Phẩm';
                } else if (index === 2) {
                    title.textContent = lang === 'zh' ? '報價確認' : lang === 'en' ? 'Quote Confirmation' : 'Xác Nhận Báo Giá';
                } else if (index === 3) {
                    title.textContent = lang === 'zh' ? '訂單執行' : lang === 'en' ? 'Order Execution' : 'Thực Hành Đơn Hàng';
                } else if (index === 4) {
                    title.textContent = lang === 'zh' ? '貨物交付' : lang === 'en' ? 'Goods Delivery' : 'Giao Hàng';
                } else if (index === 5) {
                    title.textContent = lang === 'zh' ? '售後服務' : lang === 'en' ? 'After-sales Service' : 'Dịch Vụ Sau Bán Hàng';
                }
            });
        }
        
        // 更新服务页面的服务详情标题
        if (window.location.pathname.includes('services.html')) {
            const serviceTitles = document.querySelectorAll('.service-detail h3');
            serviceTitles.forEach((title, index) => {
                if (index === 0) {
                    title.textContent = lang === 'zh' ? '產品采購服務' : lang === 'en' ? 'Product Procurement Services' : 'Dịch Vụ Mua Sắm Sản Phẩm';
                } else if (index === 1) {
                    title.textContent = lang === 'zh' ? '質量控制服務' : lang === 'en' ? 'Quality Control Services' : 'Dịch Vụ Kiểm Soát Chất Lượng';
                } else if (index === 2) {
                    title.textContent = lang === 'zh' ? '物流配送服務' : lang === 'en' ? 'Logistics and Distribution Services' : 'Dịch Vụ Hậu Cần Và Phân Phối';
                } else if (index === 3) {
                    title.textContent = lang === 'zh' ? '技術支持服務' : lang === 'en' ? 'Technical Support Services' : 'Dịch Vụ Hỗ Trợ Kỹ Thuật';
                } else if (index === 4) {
                    title.textContent = lang === 'zh' ? '貿易服務' : lang === 'en' ? 'Trade Services' : 'Dịch Vụ Thương Mại';
                } else if (index === 5) {
                    title.textContent = lang === 'zh' ? '客戶服務' : lang === 'en' ? 'Customer Services' : 'Dịch Vụ Khách Hàng';
                }
            });
        }
        
        // 更新联系我们页面的工作时间
        if (window.location.pathname.includes('contact.html')) {
            const workTimeSection = document.querySelector('.info-item i.fa-clock');
            if (workTimeSection) {
                const parentDiv = workTimeSection.closest('.info-item');
                if (parentDiv) {
                    const h3 = parentDiv.querySelector('h3');
                    const pElements = parentDiv.querySelectorAll('p');
                    if (h3) {
                        h3.textContent = lang === 'zh' ? '工作時間' : lang === 'en' ? 'Working Hours' : 'Giờ Làm Việc';
                    }
                    if (pElements.length > 0) {
                        pElements[0].textContent = lang === 'zh' ? '周一至周五: 9:00 - 18:00' : lang === 'en' ? 'Monday to Friday: 9:00 - 18:00' : 'Thứ Hai đến Thứ Sáu: 9:00 - 18:00';
                    }
                    if (pElements.length > 1) {
                        pElements[1].textContent = lang === 'zh' ? '周六、周日: 休息' : lang === 'en' ? 'Saturday, Sunday: Rest' : 'Thứ Bảy, Chủ Nhật: Nghỉ Ngơi';
                    }
                }
            }
        }
        
        // 更新产品页面的分类标题和描述
        if (window.location.pathname.includes('products.html')) {
            // 工程塑料
            const engineeringSection = document.querySelector('h2[data-category="engineering"]');
            if (engineeringSection) {
                engineeringSection.textContent = lang === 'zh' ? '工程塑料' : lang === 'en' ? 'Engineering Plastics' : 'Nhựa Kỹ Thuật';
                const p = engineeringSection.nextElementSibling;
                if (p && p.tagName === 'P') {
                    p.textContent = lang === 'zh' ? '工程塑料具有優異的機械性能、耐熱性、耐化學腐蝕性等特點，廣泛應用於汽車、電子、醫療等高端領域。' : lang === 'en' ? 'Engineering plastics have excellent mechanical properties, heat resistance, chemical corrosion resistance and other characteristics, widely used in automotive, electronics, medical and other high-end fields.' : 'Nhựa kỹ thuật có tính chất cơ học, khả năng chịu nhiệt, chống ăn mòn hóa học và các đặc tính khác xuất sắc, được sử dụng rộng rãi trong ô tô, điện tử, y tế và các lĩnh vực cao cấp khác.';
                }
            }
            
            // 通用塑料
            const generalSection = document.querySelector('h2[data-category="general"]');
            if (generalSection) {
                generalSection.textContent = lang === 'zh' ? '通用塑料' : lang === 'en' ? 'General Plastics' : 'Nhựa Chung';
                const p = generalSection.nextElementSibling;
                if (p && p.tagName === 'P') {
                    p.textContent = lang === 'zh' ? '通用塑料具有良好的加工性能和性價比，廣泛應用於日常生活和工業領域。' : lang === 'en' ? 'General plastics have good processing performance and cost-effectiveness, widely used in daily life and industrial fields.' : 'Nhựa通用 có khả năng chế biến tốt và hiệu quả chi phí, được sử dụng rộng rãi trong cuộc sống hàng ngày và các lĩnh vực công nghiệp.';
                }
            }
            
            // 可降解塑料
            const biodegradableSection = document.querySelector('h2[data-category="biodegradable"]');
            if (biodegradableSection) {
                biodegradableSection.textContent = lang === 'zh' ? '可降解塑料' : lang === 'en' ? 'Biodegradable Plastics' : 'Nhựa Có Thể Phân Hủy';
                const p = biodegradableSection.nextElementSibling;
                if (p && p.tagName === 'P') {
                    p.textContent = lang === 'zh' ? '可降解塑料是一種環境友好型材料，在自然環境中可以被微生物分解，減少對環境的污染。' : lang === 'en' ? 'Biodegradable plastics are environmentally friendly materials that can be decomposed by microorganisms in the natural environment, reducing environmental pollution.' : 'Nhựa có thể phân hủy là vật liệu thân thiện với môi trường, có thể được vi sinh vật phân hủy trong môi trường tự nhiên, giảm ô nhiễm môi trường.';
                }
            }
            
            // 热塑性弹性体
            const elastomerSection = document.querySelector('h2[data-category="elastomer"]');
            if (elastomerSection) {
                elastomerSection.textContent = lang === 'zh' ? '熱塑性彈性體' : lang === 'en' ? 'Thermoplastic Elastomers' : 'Elastomer Nhiệt Dinh';
                const p = elastomerSection.nextElementSibling;
                if (p && p.tagName === 'P') {
                    p.textContent = lang === 'zh' ? '熱塑性彈性體具有橡膠的彈性和塑料的加工性能，廣泛應用於汽車、電子、醫療等領域。' : lang === 'en' ? 'Thermoplastic elastomers have the elasticity of rubber and the processing performance of plastics, widely used in automotive, electronics, medical and other fields.' : 'Elastomer nhiệt đinh có độ co giãn của cao su và khả năng chế biến của nhựa, được sử dụng rộng rãi trong ô tô, điện tử, y tế và các lĩnh vực khác.';
                }
            }
            
            // 特种材料
            const specialtySection = document.querySelector('h2[data-category="specialty"]');
            if (specialtySection) {
                specialtySection.textContent = lang === 'zh' ? '特種材料' : lang === 'en' ? 'Specialty Materials' : 'Vật Liệu Đặc Thù';
                const p = specialtySection.nextElementSibling;
                if (p && p.tagName === 'P') {
                    p.textContent = lang === 'zh' ? '特種材料具有特殊的性能，如耐高溫、耐腐蝕、導電、阻燃等，廣泛應用於高端領域。' : lang === 'en' ? 'Specialty materials have special properties, such as high temperature resistance, corrosion resistance, conductivity, flame retardancy, etc., widely used in high-end fields.' : 'Vật liệu đặc thù có các tính chất đặc biệt, như chịu nhiệt cao, chống ăn mòn, dẫn điện, chống cháy, v.v., được sử dụng rộng rãi trong các lĩnh vực cao cấp.';
                }
            }
        }
        
        // 更新页面次级标题
        const secondaryTitles = document.querySelectorAll('h2');
        secondaryTitles.forEach(title => {
            if (!title.closest('.banner') && !title.closest('.hero')) {
                if (title.textContent === '發展歷程' || title.textContent === '发展历程') {
                    title.textContent = lang === 'zh' ? '發展歷程' : lang === 'en' ? 'Development History' : 'Lịch Sử Phát Triển';
                } else if (title.textContent === '核心业务' || title.textContent === '核心業務') {
                    title.textContent = lang === 'zh' ? '核心業務' : lang === 'en' ? 'Core Business' : 'Lĩnh Vực Chính';
                } else if (title.textContent === '我们的优势' || title.textContent === '我們的優勢') {
                    title.textContent = lang === 'zh' ? '我們的優勢' : lang === 'en' ? 'Our Advantages' : 'Lợi Thế Của Chúng Tôi';
                } else if (title.textContent === '產品中心') {
                    title.textContent = lang === 'zh' ? '產品中心' : lang === 'en' ? 'Product Center' : 'Trung Tâm Sản Phẩm';
                } else if (title.textContent === '行業應用') {
                    title.textContent = lang === 'zh' ? '行業應用' : lang === 'en' ? 'Industry Applications' : 'Ứng Dụng Ngành Nghề';
                } else if (title.textContent === '應用案例') {
                    title.textContent = lang === 'zh' ? '應用案例' : lang === 'en' ? 'Application Cases' : 'Trường Hợp Ứng Dụng';
                } else if (title.textContent === '合作品牌') {
                    title.textContent = lang === 'zh' ? '合作品牌' : lang === 'en' ? 'Cooperative Brands' : 'Thương Hiệu Hợp Tác';
                } else if (title.textContent === '我們的服務') {
                    title.textContent = lang === 'zh' ? '我們的服務' : lang === 'en' ? 'Our Services' : 'Dịch Vụ Của Chúng Tôi';
                } else if (title.textContent === '新聞中心') {
                    title.textContent = lang === 'zh' ? '新聞中心' : lang === 'en' ? 'News Center' : 'Trung Tâm Tin Tức';
                } else if (title.textContent === '聯繫我們') {
                    title.textContent = lang === 'zh' ? '聯繫我們' : lang === 'en' ? 'Contact Us' : 'Liên Hệ Chúng Tôi';
                }
            }
        });
        
        // 更新关于我们页面的核心业务和优势部分的子标题
        if (window.location.pathname.includes('about.html')) {
            // 更新核心业务部分的子标题
            const businessItems = document.querySelectorAll('.business-item h3');
            businessItems.forEach((item, index) => {
                if (index === 0) {
                    item.textContent = lang === 'zh' ? '工程塑料' : lang === 'en' ? 'Engineering Plastics' : 'Nhựa Kỹ Thuật';
                } else if (index === 1) {
                    item.textContent = lang === 'zh' ? '通用塑料' : lang === 'en' ? 'General Plastics' : 'Nhựa Chung';
                } else if (index === 2) {
                    item.textContent = lang === 'zh' ? '可降解塑料' : lang === 'en' ? 'Biodegradable Plastics' : 'Nhựa Có Thể Phân Hủy';
                } else if (index === 3) {
                    item.textContent = lang === 'zh' ? '熱塑性彈性體' : lang === 'en' ? 'Thermoplastic Elastomers' : 'Elastomer Nhiệt Dinh';
                } else if (index === 4) {
                    item.textContent = lang === 'zh' ? '特種材料' : lang === 'en' ? 'Specialty Materials' : 'Vật Liệu Đặc Thù';
                }
            });
            
            // 更新核心业务部分的描述
            const businessDescriptions = document.querySelectorAll('.business-item p');
            businessDescriptions.forEach((item, index) => {
                if (index === 0) {
                    item.textContent = lang === 'zh' ? '耐高溫/高強度/耐腐蝕' : lang === 'en' ? 'High Temperature Resistance / High Strength / Corrosion Resistance' : 'Chống Nhiệt Cao / Cường Độ Cao / Chống Kíp';
                } else if (index === 1) {
                    item.textContent = lang === 'zh' ? 'PP/PE/ABS/PVC等系列' : lang === 'en' ? 'PP/PE/ABS/PVC Series' : 'Dòng PP/PE/ABS/PVC';
                } else if (index === 2) {
                    item.textContent = lang === 'zh' ? 'PLA/PHA' : lang === 'en' ? 'PLA/PHA' : 'PLA/PHA';
                } else if (index === 3) {
                    item.textContent = lang === 'zh' ? 'TPE/TPR/TPU/TPV/TPEE等系列（WinFlex自主品牌）' : lang === 'en' ? 'TPE/TPR/TPU/TPV/TPEE Series (WinFlex Own Brand)' : 'Dòng TPE/TPR/TPU/TPV/TPEE (Thương Hiệu WinFlex)';
                } else if (index === 4) {
                    item.textContent = lang === 'zh' ? 'PEEK/PPS 導電/阻燃/抗靜電/抗黃變/減震等系列' : lang === 'en' ? 'PEEK/PPS Conductive / Flame Retardant / Anti-static / Anti-yellowing / Shock Absorption Series' : 'Dòng PEEK/PPS Chuyển Điện / Chống Cháy / Chống Tĩnh Điện / Chống Vàng / Giảm Xung Đột';
                }
            });
            
            // 更新我们的优势部分的子标题
            const advantageItems = document.querySelectorAll('.advantage-item h3');
            advantageItems.forEach((item, index) => {
                if (index === 0) {
                    item.textContent = lang === 'zh' ? '20+年经验' : lang === 'en' ? '20+ Years Experience' : '20+ Năm Kinh Nghiệm';
                } else if (index === 1) {
                    item.textContent = lang === 'zh' ? '全球网络' : lang === 'en' ? 'Global Network' : 'Mạng Toàn Cầu';
                } else if (index === 2) {
                    item.textContent = lang === 'zh' ? '优质伙伴' : lang === 'en' ? 'Quality Partners' : 'Đối Tác Chất Lượng';
                } else if (index === 3) {
                    item.textContent = lang === 'zh' ? '质量管控' : lang === 'en' ? 'Quality Control' : 'Điều Kiểm Chất Lượng';
                } else if (index === 4) {
                    item.textContent = lang === 'zh' ? '專業團隊' : lang === 'en' ? 'Professional Team' : 'Đội Ngũ Chuyên Nghiệp';
                } else if (index === 5) {
                    item.textContent = lang === 'zh' ? '完善物流' : lang === 'en' ? 'Complete Logistics' : 'Hậu Cần Hoàn Thiện';
                } else if (index === 6) {
                    item.textContent = lang === 'zh' ? '进出口权' : lang === 'en' ? 'Import & Export Rights' : 'Quyền Xuất Nhập Khẩu';
                }
            });
            
            // 更新我们的优势部分的描述
            const advantageDescriptions = document.querySelectorAll('.advantage-item p');
            advantageDescriptions.forEach((item, index) => {
                if (index === 0) {
                    item.textContent = lang === 'zh' ? '專注塑膠原料行業，擁有豐富的市場經驗和專業知識' : lang === 'en' ? 'Focus on plastic raw materials industry, with rich market experience and professional knowledge' : 'Tập trung vào ngành nguyên liệu nhựa, với kinh nghiệm thị trường phong phú và kiến thức chuyên nghiệp';
                } else if (index === 1) {
                    item.textContent = lang === 'zh' ? '與多家國際知名塑膠原料生產商建立長期穩定合作關係' : lang === 'en' ? 'Established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers' : 'Thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế';
                } else if (index === 2) {
                    item.textContent = lang === 'zh' ? '代理銷售多個國際知名品牌的塑膠原料' : lang === 'en' ? 'Act as agent for many international well-known brands of plastic raw materials' : 'Làm đại lý cho nhiều thương hiệu nguyên liệu nhựa nổi tiếng quốc tế';
                } else if (index === 3) {
                    item.textContent = lang === 'zh' ? '嚴格的質量控制體系，確保產品質量穩定可靠' : lang === 'en' ? 'Strict quality control system to ensure stable and reliable product quality' : 'Hệ thống kiểm soát chất lượng nghiêm ngặt để đảm bảo chất lượng sản phẩm ổn định và đáng tin cậy';
                }
            });
            
            // 更新时间轴的年份和"至今"
            const timelineDates = document.querySelectorAll('.timeline-date');
            timelineDates.forEach(dateElement => {
                const dateText = dateElement.textContent;
                if (dateText.includes('年')) {
                    // 处理年份，如"2008年"
                    const year = dateText.replace('年', '');
                    dateElement.textContent = lang === 'zh' ? `${year}年` : lang === 'en' ? `${year}` : `${year}`;
                } else if (dateText === '至今') {
                    // 处理"至今"
                    dateElement.textContent = lang === 'zh' ? '至今' : lang === 'en' ? 'Present' : 'Hiện Tại';
                }
            });
            
            // 更新我们的优势部分的描述（续）
            advantageDescriptions.forEach((item, index) => {
                if (index === 4) {
                    item.textContent = lang === 'zh' ? '擁有一支經驗豐富、專業素質高的團隊' : lang === 'en' ? 'Has an experienced and highly professional team' : 'Có một đội ngũ giàu kinh nghiệm và chuyên nghiệp';
                } else if (index === 5) {
                    item.textContent = lang === 'zh' ? '在中國大陸、東南亞等地設有分支機構和倉儲中心，確保及時交貨' : lang === 'en' ? 'Has branches and warehousing centers in mainland China, Southeast Asia and other places to ensure timely delivery' : 'Có chi nhánh và trung tâm kho lưu trữ tại Trung Quốc nội địa, Đông Nam Á và các nơi khác để đảm bảo giao hàng kịp thời';
                } else if (index === 6) {
                    item.textContent = lang === 'zh' ? '公司擁有自主進出口權，能夠直接與國際供應商和客戶進行貿易往來' : lang === 'en' ? 'The company has independent import and export rights, able to directly trade with international suppliers and customers' : 'Công ty sở hữu quyền xuất nhập khẩu độc lập, có thể trực tiếp thương mại với các nhà cung cấp và khách hàng quốc tế';
                }
            });
        }
        
        // 更新页面描述
        const pageDesc = document.querySelector('h1 + p');
        if (pageDesc) {
            if (pageDesc.textContent.includes('香港穩卓國際貿易有限公司成立於2009年')) {
                pageDesc.textContent = lang === 'zh' ? '香港穩卓國際貿易有限公司成立於2009年，是一家專業從事塑膠原料貿易及國外品牌代理的企業。公司總部位於香港，在中國大陸、東南亞等地設有辦事處和倉儲中心。' : lang === 'en' ? 'Hong Kong Winzhuo International Trade Co., Ltd. was established in 2009, specializing in plastic raw material trade and foreign brand agency. Headquartered in Hong Kong, the company has offices and warehousing centers in mainland China, Southeast Asia and other places.' : 'Công ty TNHH Thương mại Quốc tế Winzhuo Hong Kong được thành lập vào năm 2009, chuyên从事 buôn bán nguyên liệu nhựa và đại lý thương hiệu nước ngoài. Có trụ sở chính tại Hồng Kông, công ty có văn phòng và trung tâm kho lưu trữ tại Trung Quốc nội địa, Đông Nam Á và các nơi khác.';
            } else if (pageDesc.textContent.includes('穩卓國際的塑膠原料廣泛應用於各個行業')) {
                pageDesc.textContent = lang === 'zh' ? '穩卓國際的塑膠原料廣泛應用於各個行業，以下是我們的一些成功案例。這些案例展示了我們如何為不同行業的客戶提供定制化的塑膠原料解決方案，幫助他們實現產品的最佳性能。' : lang === 'en' ? 'Winzhuo International\'s plastic raw materials are widely used in various industries. Here are some of our successful cases. These cases show how we provide customized plastic raw material solutions for customers in different industries to help them achieve the best product performance.' : 'Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong các ngành nghề khác nhau. Dưới đây là một số trường hợp thành công của chúng tôi. Những trường hợp này cho thấy cách chúng tôi cung cấp các giải pháp nguyên liệu nhựa được tùy chỉnh cho khách hàng trong các ngành khác nhau để giúp họ đạt được hiệu suất sản phẩm tốt nhất.';
            } else if (pageDesc.textContent.includes('穩卓國際的塑料原料廣泛應用於汽車、電子、家電、醫療、包裝、建築等多個行業')) {
                pageDesc.textContent = lang === 'zh' ? '穩卓國際的塑料原料廣泛應用於汽車、電子、家電、醫療、包裝、建築等多個行業。我們根據不同行業的需求，提供定製化的塑料原料解決方案，幫助客戶實現產品的最佳性能。' : lang === 'en' ? 'Winzhuo International\'s plastic raw materials are widely used in automotive, electronics, home appliances, medical, packaging, construction and other industries. We provide customized plastic raw material solutions based on the needs of different industries to help customers achieve the best product performance.' : 'Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong các ngành như ô tô, điện tử, thiết bị gia dụng, y tế, bao bì, xây dựng và các ngành khác. Chúng tôi cung cấp các giải pháp nguyên liệu nhựa được tùy chỉnh dựa trên nhu cầu của các ngành khác nhau để giúp khách hàng đạt được hiệu suất sản phẩm tốt nhất.';
            } else if (pageDesc.textContent.includes('穩卓國際作為專業的塑膠原料貿易商')) {
                pageDesc.textContent = lang === 'zh' ? '穩卓國際作為專業的塑膠原料貿易商，代理全球優質塑料原料，產品涵蓋工程塑料、通用塑料、可降解塑料、熱塑性彈性體和特種材料等多個系列。我們與多家國際知名塑料原料生產商建立了長期穩定的合作關係，同時與優質生產廠家合作開發定製化產品，確保為客戶提供高質量的產品和專業的服務。' : lang === 'en' ? 'As a professional plastic raw material trader, Winzhuo International acts as an agent for global high-quality plastic raw materials, covering engineering plastics, general plastics, biodegradable plastics, thermoplastic elastomers and specialty materials. We have established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers, and at the same time cooperate with high-quality manufacturers to develop customized products to ensure high-quality products and professional services for customers.' : 'Là một nhà buôn nguyên liệu nhựa chuyên nghiệp, Winzhuo International làm đại lý cho nguyên liệu nhựa chất lượng toàn cầu, bao gồm nhựa kỹ thuật, nhựa chung, nhựa có thể phân hủy, elastomer nhiệt dính và vật liệu đặc biệt. Chúng tôi đã thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế, đồng thời hợp tác với các nhà sản xuất chất lượng để phát triển các sản phẩm được tùy chỉnh nhằm đảm bảo sản phẩm chất lượng cao và dịch vụ chuyên nghiệp cho khách hàng.';
            } else if (pageDesc.textContent.includes('如果您有任何問題或需求，歡迎隨時聯繫我們。我們的團隊將竭誠為您服務，為您提供專業的塑膠原料解決方案。')) {
                pageDesc.textContent = lang === 'zh' ? '如果您有任何問題或需求，歡迎隨時聯繫我們。我們的團隊將竭誠為您服務，為您提供專業的塑膠原料解決方案。' : lang === 'en' ? 'If you have any questions or needs, please feel free to contact us. Our team will be dedicated to serving you and providing you with professional plastic raw material solutions.' : 'Nếu bạn có bất kỳ câu hỏi hoặc nhu cầu nào, vui lòng liên hệ với chúng tôi. Đội ngũ của chúng tôi sẽ wholeheartedly phục vụ bạn và cung cấp cho bạn các giải pháp nguyên liệu nhựa chuyên nghiệp.';
            } else if (pageDesc.textContent.includes('穩卓國際為客戶提供全方位的塑料原料解決方案')) {
                pageDesc.textContent = lang === 'zh' ? '穩卓國際為客戶提供全方位的塑料原料解決方案，包括產品諮詢、技術支持、供應鏈管理等服務。我們的專業團隊將根據客戶的具體需求，提供個性化的解決方案，確保客戶獲得最適合的塑料原料產品。' : lang === 'en' ? 'Winzhuo International provides customers with comprehensive plastic raw material solutions, including product consultation, technical support, supply chain management and other services. Our professional team will provide personalized solutions based on the specific needs of customers to ensure that customers get the most suitable plastic raw material products.' : 'Winzhuo International cung cấp cho khách hàng các giải pháp nguyên liệu nhựa toàn diện, bao gồm tư vấn sản phẩm, hỗ trợ kỹ thuật, quản lý chuỗi cung ứng và các dịch vụ khác. Đội ngũ chuyên nghiệp của chúng tôi sẽ cung cấp các giải pháp cá nhân hóa dựa trên nhu cầu cụ thể của khách hàng để đảm bảo khách hàng nhận được sản phẩm nguyên liệu nhựa phù hợp nhất.';
            } else if (pageDesc.textContent.includes('穩卓國際與眾多國際知名塑料原料品牌建立了長期穩定的合作關係')) {
                pageDesc.textContent = lang === 'zh' ? '穩卓國際與眾多國際知名塑料原料品牌建立了長期穩定的合作關係，代理銷售多個國際知名品牌的塑料原料。我們的合作品牌涵蓋了工程塑料、通用塑料、可降解塑料、熱塑性彈性體和特種材料等多個領域，為客戶提供多元化的選擇。' : lang === 'en' ? 'Winzhuo International has established long-term stable cooperative relationships with many international well-known plastic raw material brands, acting as an agent for the sale of plastic raw materials from multiple international well-known brands. Our cooperative brands cover engineering plastics, general plastics, biodegradable plastics, thermoplastic elastomers and specialty materials, providing customers with diversified choices.' : 'Winzhuo International đã thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều thương hiệu nguyên liệu nhựa nổi tiếng quốc tế, làm đại lý bán nguyên liệu nhựa từ nhiều thương hiệu nổi tiếng quốc tế. Các thương hiệu hợp tác của chúng tôi bao gồm nhựa kỹ thuật, nhựa chung, nhựa có thể phân hủy, elastomer nhiệt dính và vật liệu đặc biệt, cung cấp cho khách hàng những lựa chọn đa dạng.';
            } else if (pageDesc.textContent.includes('穩卓國際定期發佈公司新聞和行業資訊')) {
                pageDesc.textContent = lang === 'zh' ? '穩卓國際定期發佈公司新聞和行業資訊，包括公司動態、產品資訊、行業趨勢等內容。我們希望通過這些資訊，讓客戶更好地了解我們的公司和行業發展動態，為客戶提供更有價值的服務。' : lang === 'en' ? 'Winzhuo International regularly releases company news and industry information, including company updates, product information, industry trends and other content. We hope that through this information, customers can better understand our company and industry development trends, and provide customers with more valuable services.' : 'Winzhuo International thường xuyên phát布 tin tức công ty và thông tin ngành, bao gồm cập nhật công ty, thông tin sản phẩm, xu hướng ngành và nội dung khác. Chúng tôi hy vọng rằng thông qua thông tin này, khách hàng có thể hiểu rõ hơn về công ty của chúng tôi và xu hướng phát triển ngành, và cung cấp cho khách hàng các dịch vụ có giá trị hơn.';
            }
        }
        
        // 更新联系我们页面内容
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            const h2 = contactInfo.querySelector('h2');
            if (h2) {
                h2.textContent = lang === 'zh' ? '聯繫資訊' : lang === 'en' ? 'Contact Information' : 'Thông Tin Liên Hệ';
            }
            
            const infoItems = contactInfo.querySelectorAll('.info-item');
            infoItems.forEach((item, index) => {
                const h3 = item.querySelector('h3');
                if (h3) {
                    if (index === 0) {
                        h3.textContent = lang === 'zh' ? '地址' : lang === 'en' ? 'Address' : 'Địa Chỉ';
                    } else if (index === 1) {
                        h3.textContent = lang === 'zh' ? '聯繫電話' : lang === 'en' ? 'Phone' : 'Điện Thoại';
                    } else if (index === 2) {
                        h3.textContent = lang === 'zh' ? '電子郵箱' : lang === 'en' ? 'Email' : 'Email';
                    } else if (index === 3) {
                        h3.textContent = lang === 'zh' ? '工作時間' : lang === 'en' ? 'Working Hours' : 'Giờ Làm Việc';
                    }
                }
            });
            
            const socialLinks = contactInfo.querySelector('.social-links');
            if (socialLinks) {
                const h3 = socialLinks.querySelector('h3');
                if (h3) {
                    h3.textContent = lang === 'zh' ? '關注我們' : lang === 'en' ? 'Follow Us' : 'Theo Dõi Chúng Tôi';
                }
                
                const socialItems = socialLinks.querySelectorAll('li a');
                socialItems.forEach((item, index) => {
                    if (index === 0) {
                        item.textContent = lang === 'zh' ? '微信' : lang === 'en' ? 'WeChat' : 'WeChat';
                        item.innerHTML = '<i class="fab fa-weixin"></i> ' + (lang === 'zh' ? '微信' : lang === 'en' ? 'WeChat' : 'WeChat');
                    } else if (index === 1) {
                        item.textContent = lang === 'zh' ? '微博' : lang === 'en' ? 'Weibo' : 'Weibo';
                        item.innerHTML = '<i class="fab fa-weibo"></i> ' + (lang === 'zh' ? '微博' : lang === 'en' ? 'Weibo' : 'Weibo');
                    } else if (index === 2) {
                        item.textContent = lang === 'zh' ? 'QQ' : lang === 'en' ? 'QQ' : 'QQ';
                        item.innerHTML = '<i class="fab fa-qq"></i> ' + (lang === 'zh' ? 'QQ' : lang === 'en' ? 'QQ' : 'QQ');
                    } else if (index === 3) {
                        item.textContent = lang === 'zh' ? 'WhatsApp' : lang === 'en' ? 'WhatsApp' : 'WhatsApp';
                        item.innerHTML = '<i class="fab fa-whatsapp"></i> ' + (lang === 'zh' ? 'WhatsApp' : lang === 'en' ? 'WhatsApp' : 'WhatsApp');
                    } else if (index === 4) {
                        item.textContent = lang === 'zh' ? 'Telegram' : lang === 'en' ? 'Telegram' : 'Telegram';
                        item.innerHTML = '<i class="fab fa-telegram"></i> ' + (lang === 'zh' ? 'Telegram' : lang === 'en' ? 'Telegram' : 'Telegram');
                    }
                });
            }
        }
        
        // 更新联系表单内容
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            const h2 = contactForm.querySelector('h2');
            if (h2) {
                h2.textContent = lang === 'zh' ? '在線咨詢' : lang === 'en' ? 'Online Consultation' : 'Tư Vấn Trực Tuyến';
            }
            
            const formLabels = contactForm.querySelectorAll('label');
            formLabels.forEach((label, index) => {
                if (index === 0) {
                    label.textContent = lang === 'zh' ? '姓名' : lang === 'en' ? 'Name' : 'Tên';
                } else if (index === 1) {
                    label.textContent = lang === 'zh' ? '郵箱' : lang === 'en' ? 'Email' : 'Email';
                } else if (index === 2) {
                    label.textContent = lang === 'zh' ? '電話' : lang === 'en' ? 'Phone' : 'Điện Thoại';
                } else if (index === 3) {
                    label.textContent = lang === 'zh' ? '咨詢主題' : lang === 'en' ? 'Subject' : 'Chủ Đề';
                } else if (index === 4) {
                    label.textContent = lang === 'zh' ? '咨詢內容' : lang === 'en' ? 'Message' : 'Nội Dung';
                }
            });
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = lang === 'zh' ? '提交咨詢' : lang === 'en' ? 'Submit' : 'Gửi';
            }
            
            const selectOptions = contactForm.querySelectorAll('select option');
            selectOptions.forEach((option, index) => {
                if (index === 0) {
                    option.textContent = lang === 'zh' ? '請選擇' : lang === 'en' ? 'Please select' : 'Vui lòng chọn';
                } else if (index === 1) {
                    option.textContent = lang === 'zh' ? '產品咨詢' : lang === 'en' ? 'Product Consultation' : 'Tư Vấn Sản Phẩm';
                } else if (index === 2) {
                    option.textContent = lang === 'zh' ? '價格咨詢' : lang === 'en' ? 'Price Consultation' : 'Tư Vấn Giá';
                } else if (index === 3) {
                    option.textContent = lang === 'zh' ? '交貨期咨詢' : lang === 'en' ? 'Delivery Consultation' : 'Tư Vấn Thời Gian Giao Hàng';
                } else if (index === 4) {
                    option.textContent = lang === 'zh' ? '其他咨詢' : lang === 'en' ? 'Other Consultation' : 'Tư Vấn Khác';
                }
            });
        }
        
        // 更新服务页面内容
        const servicePage = document.querySelector('.inner-page');
        if (servicePage) {
            // 更新页面描述
            const pageParagraphs = servicePage.querySelectorAll('p');
            if (pageParagraphs.length > 0) {
                pageParagraphs[0].textContent = lang === 'zh' ? '穩卓國際作為專業的塑膠原料貿易商，提供全方位的塑膠原料解決方案，包括產品采購、質量控制、物流配送、技術支持等服務。我們的團隊擁有豐富的行業經驗和專業知識，能夠根據客戶的需求提供定制化的服務。' : lang === 'en' ? 'As a professional plastic raw material trader, Winzhuo International provides comprehensive plastic raw material solutions, including product procurement, quality control, logistics and distribution, technical support and other services. Our team has rich industry experience and professional knowledge, able to provide customized services according to customer needs.' : 'Là một nhà buôn nguyên liệu nhựa chuyên nghiệp, Winzhuo International cung cấp các giải pháp nguyên liệu nhựa toàn diện, bao gồm mua sắm sản phẩm, kiểm soát chất lượng, hậu cần và phân phối, hỗ trợ kỹ thuật và các dịch vụ khác. Đội ngũ của chúng tôi có kinh nghiệm ngành phong phú và kiến thức chuyên nghiệp, có thể cung cấp các dịch vụ được tùy chỉnh theo nhu cầu của khách hàng.';
            }
            
            // 更新服务详情
            const serviceDetails = servicePage.querySelectorAll('.service-detail');
            serviceDetails.forEach((detail, index) => {
                const h3 = detail.querySelector('h3');
                const p = detail.querySelector('p');
                const ul = detail.querySelector('ul');
                if (h3 && p && ul) {
                    if (index === 0) {
                        h3.textContent = lang === 'zh' ? '產品采購服務' : lang === 'en' ? 'Product Procurement Services' : 'Dịch Vụ Mua Sắm Sản Phẩm';
                        p.textContent = lang === 'zh' ? '我們與全球多家優質塑膠原料生產廠家建立了長期穩定的合作關係，為客戶提供多元化的產品選擇和競爭力的價格。' : lang === 'en' ? 'We have established long-term stable cooperative relationships with many high-quality plastic raw material manufacturers worldwide, providing customers with diversified product choices and competitive prices.' : 'Chúng tôi đã thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa chất lượng trên toàn cầu, cung cấp cho khách hàng các lựa chọn sản phẩm đa dạng và giá cả cạnh tranh.';
                        const items = ul.querySelectorAll('li');
                        items.forEach((item, idx) => {
                            if (idx === 0) item.textContent = lang === 'zh' ? '國際品牌代理采購' : lang === 'en' ? 'International brand agency procurement' : 'Mua sắm đại lý thương hiệu quốc tế';
                            else if (idx === 1) item.textContent = lang === 'zh' ? '定製化產品開發' : lang === 'en' ? 'Customized product development' : 'Phát triển sản phẩm được tùy chỉnh';
                            else if (idx === 2) item.textContent = lang === 'zh' ? '小批量訂單服務' : lang === 'en' ? 'Small batch order service' : 'Dịch vụ đơn hàng lẻ';
                            else if (idx === 3) item.textContent = lang === 'zh' ? '緊急物料調配' : lang === 'en' ? 'Emergency material allocation' : 'Cấp phát vật liệu khẩn cấp';
                            else if (idx === 4) item.textContent = lang === 'zh' ? '產品替代方案推薦' : lang === 'en' ? 'Product alternative recommendations' : 'Giới thiệu các lựa chọn thay thế cho sản phẩm';
                        });
                    } else if (index === 1) {
                        h3.textContent = lang === 'zh' ? '質量控制服務' : lang === 'en' ? 'Quality Control Services' : 'Dịch Vụ Kiểm Soát Chất Lượng';
                        p.textContent = lang === 'zh' ? '我們與合作廠家共同建立了嚴格的質量控制體系，確保為客戶提供高品質的塑膠原料。' : lang === 'en' ? 'We have established a strict quality control system together with cooperative manufacturers to ensure high-quality plastic raw materials for customers.' : 'Chúng tôi đã thiết lập hệ thống kiểm soát chất lượng nghiêm ngặt cùng với các nhà sản xuất hợp tác để đảm bảo nguyên liệu nhựa chất lượng cao cho khách hàng.';
                        const items = ul.querySelectorAll('li');
                        items.forEach((item, idx) => {
                            if (idx === 0) item.textContent = lang === 'zh' ? '廠家實地考察' : lang === 'en' ? 'Manufacturer on-site inspection' : 'Kiểm tra tại chỗ nhà sản xuất';
                            else if (idx === 1) item.textContent = lang === 'zh' ? '產品質量檢測' : lang === 'en' ? 'Product quality testing' : 'Kiểm tra chất lượng sản phẩm';
                            else if (idx === 2) item.textContent = lang === 'zh' ? '批次質量跟蹤' : lang === 'en' ? 'Batch quality tracking' : 'Theo dõi chất lượng lô';
                            else if (idx === 3) item.textContent = lang === 'zh' ? '質量問題處理' : lang === 'en' ? 'Quality issue handling' : 'Xử lý vấn đề chất lượng';
                            else if (idx === 4) item.textContent = lang === 'zh' ? '產品認證協助' : lang === 'en' ? 'Product certification assistance' : 'Hỗ trợ chứng nhận sản phẩm';
                        });
                    } else if (index === 2) {
                        h3.textContent = lang === 'zh' ? '物流配送服務' : lang === 'en' ? 'Logistics and Distribution Services' : 'Dịch Vụ Hậu Cần Và Phân Phối';
                        p.textContent = lang === 'zh' ? '我們在中國大陸、東南亞等地設有倉儲中心，提供高效的物流配送服務，確保貨物及時交付。' : lang === 'en' ? 'We have warehousing centers in mainland China, Southeast Asia and other places, providing efficient logistics and distribution services to ensure timely delivery of goods.' : 'Chúng tôi có trung tâm kho ở Trung Quốc nội địa, Đông Nam Á và các nơi khác, cung cấp dịch vụ hậu cần và phân phối hiệu quả để đảm bảo giao hàng kịp thời.';
                        const items = ul.querySelectorAll('li');
                        items.forEach((item, idx) => {
                            if (idx === 0) item.textContent = lang === 'zh' ? '多倉儲基地支持' : lang === 'en' ? 'Multi-warehouse base support' : 'Hỗ trợ cơ sở kho đa nơi';
                            else if (idx === 1) item.textContent = lang === 'zh' ? '靈活的包裝方式' : lang === 'en' ? 'Flexible packaging methods' : 'Phương pháp đóng gói linh hoạt';
                            else if (idx === 2) item.textContent = lang === 'zh' ? '國內外運輸安排' : lang === 'en' ? 'Domestic and international transportation arrangements' : 'Thiết lập vận chuyển nội địa và quốc tế';
                            else if (idx === 3) item.textContent = lang === 'zh' ? '貨物跟蹤服務' : lang === 'en' ? 'Cargo tracking service' : 'Dịch vụ theo dõi hàng hóa';
                            else if (idx === 4) item.textContent = lang === 'zh' ? '緊急配送服務' : lang === 'en' ? 'Emergency delivery service' : 'Dịch vụ giao hàng khẩn cấp';
                        });
                    } else if (index === 3) {
                        h3.textContent = lang === 'zh' ? '技術支持服務' : lang === 'en' ? 'Technical Support Services' : 'Dịch Vụ Hỗ Trợ Kỹ Thuật';
                        p.textContent = lang === 'zh' ? '我們擁有專業的技術團隊，為客戶提供塑膠原料應用技術支持和解決方案。' : lang === 'en' ? 'We have a professional technical team to provide customers with plastic raw material application technical support and solutions.' : 'Chúng tôi có một đội ngũ kỹ thuật chuyên nghiệp để cung cấp cho khách hàng hỗ trợ kỹ thuật ứng dụng nguyên liệu nhựa và các giải pháp.';
                        const items = ul.querySelectorAll('li');
                        items.forEach((item, idx) => {
                            if (idx === 0) item.textContent = lang === 'zh' ? '材料選型指導' : lang === 'en' ? 'Material selection guidance' : 'Hướng dẫn chọn vật liệu';
                            else if (idx === 1) item.textContent = lang === 'zh' ? '加工工藝優化' : lang === 'en' ? 'Processing technology optimization' : 'Tối ưu hóa công nghệ chế biến';
                            else if (idx === 2) item.textContent = lang === 'zh' ? '產品性能測試' : lang === 'en' ? 'Product performance testing' : 'Kiểm tra hiệu suất sản phẩm';
                            else if (idx === 3) item.textContent = lang === 'zh' ? '應用案例分享' : lang === 'en' ? 'Application case sharing' : 'Chia sẻ trường hợp ứng dụng';
                            else if (idx === 4) item.textContent = lang === 'zh' ? '技術問題解答' : lang === 'en' ? 'Technical problem solving' : 'Giải đáp vấn đề kỹ thuật';
                        });
                    } else if (index === 4) {
                        h3.textContent = lang === 'zh' ? '貿易服務' : lang === 'en' ? 'Trade Services' : 'Dịch Vụ Thương Mại';
                        p.textContent = lang === 'zh' ? '我們提供專業的貿易服務，協助客戶順利完成國際貿易流程。' : lang === 'en' ? 'We provide professional trade services to help customers successfully complete international trade processes.' : 'Chúng tôi cung cấp dịch vụ thương mại chuyên nghiệp để giúp khách hàng hoàn thành quá trình thương mại quốc tế thành công.';
                        const items = ul.querySelectorAll('li');
                        items.forEach((item, idx) => {
                            if (idx === 0) item.textContent = lang === 'zh' ? '進出口貿易代理' : lang === 'en' ? 'Import and export trade agency' : ' Đại lý thương mại nhập xuất';
                            else if (idx === 1) item.textContent = lang === 'zh' ? '貨物保險辦理' : lang === 'en' ? 'Cargo insurance handling' : 'Xử lý bảo hiểm hàng hóa';
                            else if (idx === 2) item.textContent = lang === 'zh' ? '海關報關協助' : lang === 'en' ? 'Customs declaration assistance' : 'Hỗ trợ申報 hải quan';
                            else if (idx === 3) item.textContent = lang === 'zh' ? '外匯結算服務' : lang === 'en' ? 'Foreign exchange settlement services' : 'Dịch vụ giải quyết ngoại tệ';
                            else if (idx === 4) item.textContent = lang === 'zh' ? '貿易融資諮詢' : lang === 'en' ? 'Trade finance consultation' : 'Tư vấn tài chính thương mại';
                        });
                    } else if (index === 5) {
                        h3.textContent = lang === 'zh' ? '客戶服務' : lang === 'en' ? 'Customer Service' : 'Dịch Vụ Khách Hàng';
                        p.textContent = lang === 'zh' ? '我們堅持"客戶至上"的服務理念，為客戶提供專業、高效、貼心的服務。' : lang === 'en' ? 'We adhere to the "customer first" service philosophy, providing customers with professional, efficient and thoughtful services.' : 'Chúng tôi tuân thủ triết lý dịch vụ "khách hàng lên đầu", cung cấp cho khách hàng các dịch vụ chuyên nghiệp, hiệu quả và chu đáo.';
                        const items = ul.querySelectorAll('li');
                        items.forEach((item, idx) => {
                            if (idx === 0) item.textContent = lang === 'zh' ? '7x24小時在線咨詢' : lang === 'en' ? '7x24 hours online consultation' : 'Tư vấn trực tuyến 7x24 giờ';
                            else if (idx === 1) item.textContent = lang === 'zh' ? '一對一客戶經理' : lang === 'en' ? 'One-on-one account manager' : 'Quản lý tài khoản一对一';
                            else if (idx === 2) item.textContent = lang === 'zh' ? '定期客戶回訪' : lang === 'en' ? 'Regular customer回访' : 'Khách hàng định kỳ回访';
                            else if (idx === 3) item.textContent = lang === 'zh' ? '客戶需求調研' : lang === 'en' ? 'Customer demand research' : 'Nghiên cứu nhu cầu khách hàng';
                            else if (idx === 4) item.textContent = lang === 'zh' ? '售後服務跟蹤' : lang === 'en' ? 'After-sales service tracking' : 'Theo dõi dịch vụ hậu mãi';
                        });
                    }
                }
            });
            
            // 更新服务流程
            const serviceProcess = servicePage.querySelector('.service-process');
            if (serviceProcess) {
                const h2 = serviceProcess.querySelector('h2');
                if (h2) {
                    h2.textContent = lang === 'zh' ? '服務流程' : lang === 'en' ? 'Service Process' : 'Quy Trình Dịch Vụ';
                }
                
                const processSteps = serviceProcess.querySelectorAll('.process-step');
                processSteps.forEach((step, index) => {
                    const h3 = step.querySelector('h3');
                    const p = step.querySelector('p');
                    if (h3 && p) {
                        if (index === 0) {
                            h3.textContent = lang === 'zh' ? '需求溝通' : lang === 'en' ? 'Needs Communication' : 'Giao Tiếp Nhu Cầu';
                            p.textContent = lang === 'zh' ? '了解客戶的具體需求，包括產品類型、規格、數量、交貨時間等' : lang === 'en' ? 'Understand customer\'s specific needs, including product type, specification, quantity, delivery time, etc.' : 'Hiểu nhu cầu cụ thể của khách hàng, bao gồm loại sản phẩm,规格, số lượng, thời gian giao hàng, v.v.';
                        } else if (index === 1) {
                            h3.textContent = lang === 'zh' ? '產品推薦' : lang === 'en' ? 'Product Recommendation' : 'Giới Thiệu Sản Phẩm';
                            p.textContent = lang === 'zh' ? '根據客戶需求，推薦合適的產品和解決方案' : lang === 'en' ? 'Recommend suitable products and solutions according to customer needs' : 'Giới thiệu các sản phẩm và giải pháp phù hợp theo nhu cầu của khách hàng';
                        } else if (index === 2) {
                            h3.textContent = lang === 'zh' ? '報價確認' : lang === 'en' ? 'Quotation Confirmation' : 'Xác Nhận Báo Giá';
                            p.textContent = lang === 'zh' ? '提供詳細的產品報價，確認訂單細節' : lang === 'en' ? 'Provide detailed product quotations and confirm order details' : 'Cung cấp báo giá sản phẩm chi tiết và xác nhận chi tiết đơn hàng';
                        } else if (index === 3) {
                            h3.textContent = lang === 'zh' ? '訂單執行' : lang === 'en' ? 'Order Execution' : 'Thực Hiện Đơn Hàng';
                            p.textContent = lang === 'zh' ? '安排產品采購、質量檢測和物流配送' : lang === 'en' ? 'Arrange product procurement, quality inspection and logistics distribution' : 'Sắp xếp mua sắm sản phẩm, kiểm tra chất lượng và phân phối hậu cần';
                        } else if (index === 4) {
                            h3.textContent = lang === 'zh' ? '貨物交付' : lang === 'en' ? 'Goods Delivery' : 'Giao Hàng Hóa';
                            p.textContent = lang === 'zh' ? '確保貨物按時、安全交付給客戶' : lang === 'en' ? 'Ensure timely and safe delivery of goods to customers' : 'Đảm bảo giao hàng kịp thời và an toàn cho khách hàng';
                        } else if (index === 5) {
                            h3.textContent = lang === 'zh' ? '售後服務' : lang === 'en' ? 'After-sales Service' : 'Dịch Vụ Hậu Mãi';
                            p.textContent = lang === 'zh' ? '提供技術支持和售後跟蹤服務' : lang === 'en' ? 'Provide technical support and after-sales tracking services' : 'Cung cấp hỗ trợ kỹ thuật và dịch vụ theo dõi hậu mãi';
                        }
                    }
                });
            }
        }
        
        // 更新关于我们页面内容
        const aboutPage = document.querySelector('.inner-page');
        if (aboutPage && window.location.pathname.includes('about.html')) {
            // 更新公司简介部分
            const introParagraphs = aboutPage.querySelectorAll('p');
            introParagraphs.forEach((p, index) => {
                if (index === 0) {
                    p.textContent = lang === 'zh' ? '香港穩卓國際貿易有限公司成立於2009年，是一家專業從事塑膠原料貿易及國外品牌代理的企業。公司總部位於香港，在中國大陸、東南亞等地設有辦事處和倉儲中心。' : lang === 'en' ? 'Hong Kong Winzhuo International Trade Co., Ltd. was established in 2009, specializing in plastic raw material trade and foreign brand agency. Headquartered in Hong Kong, the company has offices and warehousing centers in mainland China, Southeast Asia and other places.' : 'Công ty TNHH Thương mại Quốc tế Winzhuo Hong Kong được thành lập vào năm 2009, chuyên从事 buôn bán nguyên liệu nhựa và đại lý thương hiệu nước ngoài. Có trụ sở chính tại Hồng Kông, công ty có văn phòng và trung tâm kho lưu trữ tại Trung Quốc nội địa, Đông Nam Á và các nơi khác.';
                } else if (index === 1) {
                    p.textContent = lang === 'zh' ? '多年來，我們始終堅持"質量第一，客戶至上"的經營理念，為客戶提供高品質的產品和專業的服務。我們與多家國際知名塑膠原料生產商建立了長期穩定的合作關係，代理銷售多個國際知名品牌的塑膠原料，同時與優質生產廠家合作開發定製化產品。' : lang === 'en' ? 'Over the years, we have always adhered to the business philosophy of "quality first, customer foremost", providing customers with high-quality products and professional services. We have established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers, acting as an agent for the sale of plastic raw materials from multiple international well-known brands, while cooperating with high-quality manufacturers to develop customized products.' : 'Nhiều năm qua, chúng tôi luôn tuân thủ triết lý kinh doanh "chất lượng đầu tiên, khách hàng trên hết", cung cấp cho khách hàng sản phẩm chất lượng cao và dịch vụ chuyên nghiệp. Chúng tôi đã thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế, làm đại lý bán nguyên liệu nhựa từ nhiều thương hiệu nổi tiếng quốc tế, đồng thời hợp tác với các nhà sản xuất chất lượng để phát triển các sản phẩm được tùy chỉnh.';
                } else if (index === 2) {
                    p.textContent = lang === 'zh' ? '我們的產品廣泛應用於電子電器、汽車、家電、醫療、包裝等行業，服務全球500+客戶，以專業的服務和優質的產品贏得了客戶的信賴。作為一家貿易公司，我們專注於為客戶搭建與優質生產廠家之間的橋樑，提供一站式的塑膠原料解決方案。' : lang === 'en' ? 'Our products are widely used in electronics, automotive, home appliances, medical, packaging and other industries, serving more than 500 global customers, and have won the trust of customers with professional services and high-quality products. As a trading company, we focus on building a bridge between customers and high-quality manufacturers, providing one-stop plastic raw material solutions.' : 'Sản phẩm của chúng tôi được sử dụng rộng rãi trong các ngành điện tử, ô tô, thiết bị gia dụng, y tế, đóng gói và các ngành khác, phục vụ hơn 500 khách hàng toàn cầu, và đã giành được niềm tin của khách hàng với dịch vụ chuyên nghiệp và sản phẩm chất lượng cao. Là một công ty thương mại, chúng tôi tập trung vào việc xây dựng cầu nối giữa khách hàng và các nhà sản xuất chất lượng, cung cấp các giải pháp nguyên liệu nhựa一站式.';
                } else if (index === 3) {
                    p.textContent = lang === 'zh' ? '專業代理全球優質塑膠原料，服務汽車、電子、醫療等多個行業：' : lang === 'en' ? 'Professional agent for global high-quality plastic raw materials, serving automotive, electronics, medical and other industries:' : 'Đại lý chuyên nghiệp cho nguyên liệu nhựa chất lượng toàn cầu, phục vụ các ngành ô tô, điện tử, y tế và các ngành khác:';
                }
            });
            
            // 更新发展历程部分
            const timelineItems = aboutPage.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                const content = item.querySelector('.timeline-content h3');
                if (content) {
                    if (index === 0) {
                        content.textContent = lang === 'zh' ? '江門穩卓投資有限公司成立' : lang === 'en' ? 'Jiangmen Winzhuo Investment Co., Ltd. established' : 'Công ty TNHH Đầu Tư Winzhuo Jiangmen được thành lập';
                    } else if (index === 1) {
                        content.textContent = lang === 'zh' ? '穩卓國際貿易有限公司在香港成立' : lang === 'en' ? 'Winzhuo International Trade Co., Ltd. established in Hong Kong' : 'Công ty TNHH Thương mại Quốc tế Winzhuo được thành lập tại Hồng Kông';
                    } else if (index === 2) {
                        content.textContent = lang === 'zh' ? '業務擴展，在中國大陸設立首個辦事處和倉儲中心' : lang === 'en' ? 'Business expansion, established first office and warehousing center in mainland China' : 'Mở rộng kinh doanh, thiết lập văn phòng và trung tâm kho lưu trữ đầu tiên ở Trung Quốc nội địa';
                    } else if (index === 3) {
                        content.textContent = lang === 'zh' ? '設立東莞辦公室，與代理品牌深度合作' : lang === 'en' ? 'Established Dongguan office, deepened cooperation with agency brands' : 'Thiết lập văn phòng Dongguan, tăng cường hợp tác với các thương hiệu đại lý';
                    } else if (index === 4) {
                        content.textContent = lang === 'zh' ? '設立廣州辦公室，市場拓展至東南亞' : lang === 'en' ? 'Established Guangzhou office, expanded market to Southeast Asia' : 'Thiết lập văn phòng Guangzhou, mở rộng thị trường ra Đông Nam Á';
                    } else if (index === 5) {
                        content.textContent = lang === 'zh' ? '科卓實業（深圳）有限公司成立' : lang === 'en' ? 'Kezhuo Industrial (Shenzhen) Co., Ltd. established' : 'Công ty TNHH Công Nghiệp Kezhuo (Shenzhen) được thành lập';
                    } else if (index === 6) {
                        content.textContent = lang === 'zh' ? '設立惠州辦公室' : lang === 'en' ? 'Established Huizhou office' : 'Thiết lập văn phòng Huizhou';
                    } else if (index === 7) {
                        content.textContent = lang === 'zh' ? '創新發展，引入生物降解塑料產品線' : lang === 'en' ? 'Innovative development, introduced biodegradable plastic product line' : 'Phát triển đổi mới, giới thiệu dòng sản phẩm nhựa có thể phân hủy sinh học';
                    } else if (index === 8) {
                        content.textContent = lang === 'zh' ? '增加彈性體事業部，創建品牌WinFlex' : lang === 'en' ? 'Added elastomer division, created WinFlex brand' : 'Thêm bộ phận elastomer, tạo thương hiệu WinFlex';
                    } else if (index === 9) {
                        content.textContent = lang === 'zh' ? '持續成長，不斷創新' : lang === 'en' ? 'Continuous growth, constant innovation' : 'Tăng trưởng liên tục, không ngừng đổi mới';
                    }
                }
            });
            
            // 更新核心业务部分
            const coreBusiness = aboutPage.querySelector('.core-business');
            if (coreBusiness) {
                const h2 = coreBusiness.previousElementSibling;
                if (h2 && h2.tagName === 'H2') {
                    h2.textContent = lang === 'zh' ? '核心业务' : lang === 'en' ? 'Core Business' : 'Lĩnh Vực Chính';
                }
                
                const businessItems = coreBusiness.querySelectorAll('.business-item');
                businessItems.forEach((item, index) => {
                    const h3 = item.querySelector('h3');
                    const p = item.querySelector('p');
                    if (h3 && p) {
                        if (index === 0) {
                            h3.textContent = lang === 'zh' ? '工程塑料' : lang === 'en' ? 'Engineering Plastics' : 'Nhựa Kỹ Thuật';
                            p.textContent = lang === 'zh' ? '耐高溫/高強度/耐腐蝕' : lang === 'en' ? 'High temperature resistance / High strength / Corrosion resistance' : 'Chịu nhiệt cao / Cường độ cao / Chịu ăn mòn';
                        } else if (index === 1) {
                            h3.textContent = lang === 'zh' ? '通用塑料' : lang === 'en' ? 'General Plastics' : 'Nhựa Chung';
                            p.textContent = lang === 'zh' ? 'PP/PE/ABS/PVC等系列' : lang === 'en' ? 'PP/PE/ABS/PVC and other series' : 'Dòng PP/PE/ABS/PVC và các dòng khác';
                        } else if (index === 2) {
                            h3.textContent = lang === 'zh' ? '可降解塑料' : lang === 'en' ? 'Biodegradable Plastics' : 'Nhựa Có Thể Phân Hủy';
                            p.textContent = lang === 'zh' ? 'PLA/PHA' : lang === 'en' ? 'PLA/PHA' : 'PLA/PHA';
                        } else if (index === 3) {
                            h3.textContent = lang === 'zh' ? '熱塑性彈性體' : lang === 'en' ? 'Thermoplastic Elastomers' : 'Elastomer Nhiệt Dinh';
                            p.textContent = lang === 'zh' ? 'TPE/TPR/TPU/TPV/TPEE等系列（WinFlex自主品牌）' : lang === 'en' ? 'TPE/TPR/TPU/TPV/TPEE and other series (WinFlex independent brand)' : 'Dòng TPE/TPR/TPU/TPV/TPEE và các dòng khác (thương hiệu độc lập WinFlex)';
                        } else if (index === 4) {
                            h3.textContent = lang === 'zh' ? '特種材料' : lang === 'en' ? 'Specialty Materials' : 'Vật Liệu Đặc Thù';
                            p.textContent = lang === 'zh' ? 'PEEK/PPS 導電/阻燃/抗靜電/抗黃變/減震等系列' : lang === 'en' ? 'PEEK/PPS Conductive / Flame retardant / Anti-static / Anti-yellowing / Shock absorption and other series' : 'PEEK/PPS Dòng dẫn điện / Chống cháy / Chống tĩnh điện / Chống vàng hóa / Giảm xóc và các dòng khác';
                        }
                    }
                });
            }
            
            // 更新我们的优势部分
            const advantages = aboutPage.querySelector('.advantages');
            if (advantages) {
                const h2 = advantages.previousElementSibling;
                if (h2 && h2.tagName === 'H2') {
                    h2.textContent = lang === 'zh' ? '我们的优势' : lang === 'en' ? 'Our Advantages' : 'Lợi Thế Của Chúng Tôi';
                }
                
                const advantageItems = advantages.querySelectorAll('.advantage-item');
                advantageItems.forEach((item, index) => {
                    const h3 = item.querySelector('h3');
                    const p = item.querySelector('p');
                    if (h3 && p) {
                        if (index === 0) {
                            h3.textContent = lang === 'zh' ? '20+年经验' : lang === 'en' ? '20+ Years Experience' : '20+ Năm Kinh Nghiệm';
                            p.textContent = lang === 'zh' ? '專注塑膠原料行業，擁有豐富的市場經驗和專業知識' : lang === 'en' ? 'Focus on plastic raw materials industry, with rich market experience and professional knowledge' : 'Tập trung vào ngành nguyên liệu nhựa, với kinh nghiệm thị trường phong phú và kiến thức chuyên nghiệp';
                        } else if (index === 1) {
                            h3.textContent = lang === 'zh' ? '全球网络' : lang === 'en' ? 'Global Network' : 'Mạng Toàn Cầu';
                            p.textContent = lang === 'zh' ? '與多家國際知名塑膠原料生產商建立長期穩定合作關係' : lang === 'en' ? 'Established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers' : 'Thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế';
                        } else if (index === 2) {
                            h3.textContent = lang === 'zh' ? '優質夥伴' : lang === 'en' ? 'Quality Partners' : 'Đối Tác Chất Lượng';
                            p.textContent = lang === 'zh' ? '代理銷售多個國際知名品牌的塑膠原料' : lang === 'en' ? 'Act as agent for the sale of plastic raw materials from multiple international well-known brands' : 'Làm đại lý bán nguyên liệu nhựa từ nhiều thương hiệu nổi tiếng quốc tế';
                        } else if (index === 3) {
                            h3.textContent = lang === 'zh' ? '質量管控' : lang === 'en' ? 'Quality Control' : 'Điều Kiểm Chất Lượng';
                            p.textContent = lang === 'zh' ? '嚴格的質量控制體系，確保產品質量穩定可靠' : lang === 'en' ? 'Strict quality control system to ensure stable and reliable product quality' : 'Hệ thống kiểm soát chất lượng nghiêm ngặt để đảm bảo chất lượng sản phẩm ổn định và đáng tin cậy';
                        } else if (index === 4) {
                            h3.textContent = lang === 'zh' ? '專業團隊' : lang === 'en' ? 'Professional Team' : 'Đội Ngũ Chuyên Nghiệp';
                            p.textContent = lang === 'zh' ? '擁有一支經驗豐富、專業素質高的團隊' : lang === 'en' ? 'Has an experienced and highly professional team' : 'Có một đội ngũ giàu kinh nghiệm và trình độ chuyên nghiệp cao';
                        } else if (index === 5) {
                            h3.textContent = lang === 'zh' ? '完善物流' : lang === 'en' ? 'Perfect Logistics' : 'Hậu Cần Hoàn Thiện';
                            p.textContent = lang === 'zh' ? '在中國大陸、東南亞等地設有分支機構和倉儲中心，確保及時交貨' : lang === 'en' ? 'Has branches and warehousing centers in mainland China, Southeast Asia and other places to ensure timely delivery' : 'Có chi nhánh và trung tâm kho lưu trữ ở Trung Quốc nội địa, Đông Nam Á và các nơi khác để đảm bảo giao hàng kịp thời';
                        } else if (index === 6) {
                            h3.textContent = lang === 'zh' ? '進出口權' : lang === 'en' ? 'Import & Export Rights' : 'Quyền Xuất Nhập Khẩu';
                            p.textContent = lang === 'zh' ? '公司擁有自主進出口權，能夠直接與國際供應商和客戶進行貿易往來' : lang === 'en' ? 'The company has independent import and export rights, able to directly trade with international suppliers and customers' : 'Công ty sở hữu quyền xuất nhập khẩu độc lập, có thể trực tiếp thương mại với các nhà cung cấp và khách hàng quốc tế';
                        }
                    }
                });
            }
        }
        
        // 更新产品页面内容
        const productPage = document.querySelector('.inner-page');
        if (productPage && window.location.pathname.includes('products.html')) {
            // 更新页面描述
            const pageParagraphs = productPage.querySelectorAll('p');
            pageParagraphs.forEach((p, index) => {
                if (index === 0) {
                    p.textContent = lang === 'zh' ? '穩卓國際作為專業的塑膠原料貿易商，代理全球優質塑料原料，產品涵蓋工程塑料、通用塑料、可降解塑料、熱塑性彈性體和特種材料等多個系列。我們與多家國際知名塑料原料生產商建立了長期穩定的合作關係，同時與優質生產廠家合作開發定製化產品，確保為客戶提供高質量的產品和專業的服務。' : lang === 'en' ? 'As a professional plastic raw material trader, Winzhuo International acts as an agent for global high-quality plastic raw materials, covering engineering plastics, general plastics, biodegradable plastics, thermoplastic elastomers and specialty materials. We have established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers, and at the same time cooperate with high-quality manufacturers to develop customized products to ensure high-quality products and professional services for customers.' : 'Là một nhà buôn nguyên liệu nhựa chuyên nghiệp, Winzhuo International làm đại lý cho nguyên liệu nhựa chất lượng toàn cầu, bao gồm nhựa kỹ thuật, nhựa chung, nhựa có thể phân hủy, elastomer nhiệt dính và vật liệu đặc biệt. Chúng tôi đã thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế, đồng thời hợp tác với các nhà sản xuất chất lượng để phát triển các sản phẩm được tùy chỉnh nhằm đảm bảo sản phẩm chất lượng cao và dịch vụ chuyên nghiệp cho khách hàng.';
                } else if (index === 1) {
                    p.textContent = lang === 'zh' ? '作為貿易公司，我們專注於為客戶搭建與優質生產廠家之間的橋樑，提供多元化的產品選擇和定製化的解決方案，滿足不同行業客戶的特定需求。' : lang === 'en' ? 'As a trading company, we focus on building a bridge between customers and high-quality manufacturers, providing diversified product choices and customized solutions to meet the specific needs of customers in different industries.' : 'Là một công ty thương mại, chúng tôi tập trung vào việc xây dựng cầu nối giữa khách hàng và các nhà sản xuất chất lượng, cung cấp các lựa chọn sản phẩm đa dạng và các giải pháp được tùy chỉnh để đáp ứng các nhu cầu cụ thể của khách hàng trong các ngành khác nhau.';
                } else if (index === 2) {
                    p.textContent = lang === 'zh' ? '工程塑料具有優異的機械性能、耐熱性、耐化學腐蝕性等特點，廣泛應用於汽車、電子、醫療等高端領域。' : lang === 'en' ? 'Engineering plastics have excellent mechanical properties, heat resistance, chemical corrosion resistance and other characteristics, widely used in automotive, electronics, medical and other high-end fields.' : 'Nhựa kỹ thuật có các đặc điểm xuất sắc về tính chất cơ học, chịu nhiệt, chống ăn mòn hóa học và các đặc điểm khác, được sử dụng rộng rãi trong các lĩnh vực cao端 như ô tô, điện tử, y tế.';
                } else if (index === 3) {
                    p.textContent = lang === 'zh' ? '通用塑料具有良好的加工性能和性價比，廣泛應用於日常生活和工業領域。' : lang === 'en' ? 'General plastics have good processing performance and cost performance, widely used in daily life and industrial fields.' : 'Nhựa chung có tính chất xử lý tốt và hiệu suất chi phí, được sử dụng rộng rãi trong cuộc sống hàng ngày và các lĩnh vực công nghiệp.';
                } else if (index === 4) {
                    p.textContent = lang === 'zh' ? '可降解塑料是一種環境友好型材料，在自然環境中可以被微生物分解，減少對環境的污染。' : lang === 'en' ? 'Biodegradable plastics are environmentally friendly materials that can be decomposed by microorganisms in the natural environment, reducing environmental pollution.' : 'Nhựa có thể phân hủy là một loại vật liệu thân thiện với môi trường, có thể được vi sinh vật phân hủy trong môi trường tự nhiên, giảm thiểu ô nhiễm môi trường.';
                } else if (index === 5) {
                    p.textContent = lang === 'zh' ? '熱塑性彈性體具有橡膠的彈性和塑料的加工性能，廣泛應用於汽車、電子、醫療等領域。' : lang === 'en' ? 'Thermoplastic elastomers have the elasticity of rubber and the processing performance of plastics, widely used in automotive, electronics, medical and other fields.' : 'Elastomer nhiệt dính có độ đàn hồi của cao su và tính chất xử lý của nhựa, được sử dụng rộng rãi trong các lĩnh vực ô tô, điện tử, y tế và các lĩnh vực khác.';
                } else if (index === 6) {
                    p.textContent = lang === 'zh' ? '特種材料具有特殊的性能，如耐高溫、耐腐蝕、導電、阻燃等，廣泛應用於高端領域。' : lang === 'en' ? 'Specialty materials have special properties such as high temperature resistance, corrosion resistance, electrical conductivity, flame retardancy, etc., widely used in high-end fields.' : 'Vật liệu đặc biệt có các tính chất đặc biệt như chịu nhiệt cao, chống ăn mòn, dẫn điện, chống cháy, v.v., được sử dụng rộng rãi trong các lĩnh vực cao端.';
                }
            });
            
            // 更新产品分类筛选按钮
            const filterButtons = productPage.querySelectorAll('.filter-btn');
            filterButtons.forEach((btn, index) => {
                if (index === 0) {
                    btn.textContent = lang === 'zh' ? '全部產品' : lang === 'en' ? 'All Products' : 'Tất Cả Sản Phẩm';
                } else if (index === 1) {
                    btn.textContent = lang === 'zh' ? '工程塑料' : lang === 'en' ? 'Engineering Plastics' : 'Nhựa Kỹ Thuật';
                } else if (index === 2) {
                    btn.textContent = lang === 'zh' ? '通用塑料' : lang === 'en' ? 'General Plastics' : 'Nhựa Chung';
                } else if (index === 3) {
                    btn.textContent = lang === 'zh' ? '可降解塑料' : lang === 'en' ? 'Biodegradable Plastics' : 'Nhựa Có Thể Phân Hủy';
                } else if (index === 4) {
                    btn.textContent = lang === 'zh' ? '熱塑性彈性體' : lang === 'en' ? 'Thermoplastic Elastomers' : 'Elastomer Nhiệt Dinh';
                } else if (index === 5) {
                    btn.textContent = lang === 'zh' ? '特種材料' : lang === 'en' ? 'Specialty Materials' : 'Vật Liệu Đặc Thù';
                }
            });
            
            // 更新产品分类标题
            const categoryHeadings = productPage.querySelectorAll('h2[data-category], h2:not([data-category])');
            categoryHeadings.forEach((heading, index) => {
                if (index === 2) {
                    heading.textContent = lang === 'zh' ? '工程塑料' : lang === 'en' ? 'Engineering Plastics' : 'Nhựa Kỹ Thuật';
                } else if (index === 3) {
                    heading.textContent = lang === 'zh' ? '通用塑料' : lang === 'en' ? 'General Plastics' : 'Nhựa Chung';
                } else if (index === 4) {
                    heading.textContent = lang === 'zh' ? '可降解塑料' : lang === 'en' ? 'Biodegradable Plastics' : 'Nhựa Có Thể Phân Hủy';
                } else if (index === 5) {
                    heading.textContent = lang === 'zh' ? '熱塑性彈性體' : lang === 'en' ? 'Thermoplastic Elastomers' : 'Elastomer Nhiệt Dinh';
                } else if (index === 6) {
                    heading.textContent = lang === 'zh' ? '特種材料' : lang === 'en' ? 'Specialty Materials' : 'Vật Liệu Đặc Thù';
                } else if (index === 7) {
                    heading.textContent = lang === 'zh' ? '其他材料' : lang === 'en' ? 'Other Materials' : 'Các Vật Liệu Khác';
                }
            });
            
            // 更新产品项
            const productItems = productPage.querySelectorAll('.product-item');
            productItems.forEach((item, index) => {
                const h3 = item.querySelector('h3');
                const p = item.querySelector('p');
                if (h3 && p) {
                    // 工程塑料产品
                    if (index === 0) {
                        h3.textContent = lang === 'zh' ? '聚碳酸酯 (PC)' : lang === 'en' ? 'Polycarbonate (PC)' : 'Polycarbonate (PC)';
                        p.textContent = lang === 'zh' ? '具有優異的透明度和衝擊強度，廣泛應用於電子電器、汽車、醫療等領域' : lang === 'en' ? 'With excellent transparency and impact strength, widely used in electronics, automotive, medical and other fields' : 'Với độ trong suốt và cường độ chống xung đột tuyệt vời, được sử dụng rộng rãi trong các lĩnh vực điện tử, ô tô, y tế và các lĩnh vực khác';
                    } else if (index === 1) {
                        h3.textContent = lang === 'zh' ? '聚碳酸酯 (PC)' : lang === 'en' ? 'Polycarbonate (PC)' : 'Polycarbonate (PC)';
                        p.textContent = lang === 'zh' ? '高強度、高韌性，適合製作精密零件和結構件' : lang === 'en' ? 'High strength, high toughness, suitable for making precision parts and structural components' : 'Cường độ cao, độ bền cao, phù hợp để làm các bộ phận chính xác và thành phần cấu trúc';
                    } else if (index === 2) {
                        h3.textContent = lang === 'zh' ? '聚碳酸酯 (PC)' : lang === 'en' ? 'Polycarbonate (PC)' : 'Polycarbonate (PC)';
                        p.textContent = lang === 'zh' ? '耐高溫、耐老化，適合製作電氣絕緣零件' : lang === 'en' ? 'High temperature resistance, anti-aging, suitable for making electrical insulation parts' : 'Chịu nhiệt cao, chống lão hóa, phù hợp để làm các bộ phận cách điện';
                    } else if (index === 3) {
                        h3.textContent = lang === 'zh' ? '聚碳酸酯 (PC)' : lang === 'en' ? 'Polycarbonate (PC)' : 'Polycarbonate (PC)';
                        p.textContent = lang === 'zh' ? '光學級PC，透明度高，適合製作光學零件' : lang === 'en' ? 'Optical grade PC, high transparency, suitable for making optical parts' : 'PC cấp quang học, độ trong suốt cao, phù hợp để làm các bộ phận quang học';
                    } else if (index === 4) {
                        h3.textContent = lang === 'zh' ? '尼龍 6 (PA6)' : lang === 'en' ? 'Nylon 6 (PA6)' : 'Nylon 6 (PA6)';
                        p.textContent = lang === 'zh' ? '高強度、耐磨、耐油，廣泛應用於汽車、機械等領域' : lang === 'en' ? 'High strength, wear-resistant, oil-resistant, widely used in automotive, mechanical and other fields' : 'Cường độ cao, chống mài mòn, chống dầu, được sử dụng rộng rãi trong các lĩnh vực ô tô, cơ械 và các lĩnh vực khác';
                    } else if (index === 5) {
                        h3.textContent = lang === 'zh' ? '尼龍 66 (PA66)' : lang === 'en' ? 'Nylon 66 (PA66)' : 'Nylon 66 (PA66)';
                        p.textContent = lang === 'zh' ? '高強度、高剛性、耐高溫，適合製作結構件' : lang === 'en' ? 'High strength, high rigidity, high temperature resistance, suitable for making structural components' : 'Cường độ cao, độ cứng cao, chịu nhiệt cao, phù hợp để làm các thành phần cấu trúc';
                    } else if (index === 6) {
                        h3.textContent = lang === 'zh' ? '尼龍 12 (PA12)' : lang === 'en' ? 'Nylon 12 (PA12)' : 'Nylon 12 (PA12)';
                        p.textContent = lang === 'zh' ? '低密度、高韌性、耐化學腐蝕，適合製作精密零件' : lang === 'en' ? 'Low density, high toughness, chemical corrosion resistance, suitable for making precision parts' : 'Mật độ thấp, độ bền cao, chống ăn mòn hóa học, phù hợp để làm các bộ phận chính xác';
                    } else if (index === 7) {
                        h3.textContent = lang === 'zh' ? '尼龍 46 (PA46)' : lang === 'en' ? 'Nylon 46 (PA46)' : 'Nylon 46 (PA46)';
                        p.textContent = lang === 'zh' ? '超高熔點、高強度，適合製作耐高溫零件' : lang === 'en' ? 'Ultra-high melting point, high strength, suitable for making high temperature resistant parts' : 'Điểm nóng chảy siêu cao, cường độ cao, phù hợp để làm các bộ phận chịu nhiệt cao';
                    } else if (index === 8) {
                        h3.textContent = lang === 'zh' ? '聚對苯二甲酸丁二醇酯 (PBT)' : lang === 'en' ? 'Polybutylene Terephthalate (PBT)' : 'Polybutylene Terephthalate (PBT)';
                        p.textContent = lang === 'zh' ? '優異的電絕緣性、耐化學腐蝕性，適合製作電氣零件' : lang === 'en' ? 'Excellent electrical insulation, chemical corrosion resistance, suitable for making electrical parts' : 'Tính cách điện tuyệt vời, chống ăn mòn hóa học, phù hợp để làm các bộ phận điện氣';
                    } else if (index === 9) {
                        h3.textContent = lang === 'zh' ? 'PC/ABS 合金' : lang === 'en' ? 'PC/ABS Alloy' : 'PC/ABS Alloy';
                        p.textContent = lang === 'zh' ? '結合了PC的高強度和ABS的加工性，廣泛應用於汽車、電子等領域' : lang === 'en' ? 'Combining the high strength of PC and the processability of ABS, widely used in automotive, electronics and other fields' : 'Kết hợp cường độ cao của PC và tính xử lý của ABS, được sử dụng rộng rãi trong các lĩnh vực ô tô, điện tử và các lĩnh vực khác';
                    }
                    // 通用塑料产品
                    else if (index === 10) {
                        h3.textContent = lang === 'zh' ? '聚丙烯 (PP)' : lang === 'en' ? 'Polypropylene (PP)' : 'Polypropylene (PP)';
                        p.textContent = lang === 'zh' ? '具有良好的耐化學性和加工性能，廣泛應用於包裝、汽車、家電等領域' : lang === 'en' ? 'With good chemical resistance and processing performance, widely used in packaging, automotive, home appliances and other fields' : 'Với tính chống hóa học và tính xử lý tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, ô tô, thiết bị gia dụng và các lĩnh vực khác';
                    } else if (index === 11) {
                        h3.textContent = lang === 'zh' ? '聚丙烯 (PP)' : lang === 'en' ? 'Polypropylene (PP)' : 'Polypropylene (PP)';
                        p.textContent = lang === 'zh' ? '高剛性、高強度，適合製作結構件' : lang === 'en' ? 'High rigidity, high strength, suitable for making structural components' : 'Độ cứng cao, cường độ cao, phù hợp để làm các thành phần cấu trúc';
                    } else if (index === 12) {
                        h3.textContent = lang === 'zh' ? '丙烯腈-丁二烯-苯乙烯 (ABS)' : lang === 'en' ? 'Acrylonitrile Butadiene Styrene (ABS)' : 'Acrylonitrile Butadiene Styrene (ABS)';
                        p.textContent = lang === 'zh' ? '具有良好的衝擊強度和耐熱性，廣泛應用於電子、汽車等領域' : lang === 'en' ? 'With good impact strength and heat resistance, widely used in electronics, automotive and other fields' : 'Với cường độ chống xung đột và chịu nhiệt tốt, được sử dụng rộng rãi trong các lĩnh vực điện tử, ô tô và các lĩnh vực khác';
                    } else if (index === 13) {
                        h3.textContent = lang === 'zh' ? '丙烯腈-丁二烯-苯乙烯 (ABS)' : lang === 'en' ? 'Acrylonitrile Butadiene Styrene (ABS)' : 'Acrylonitrile Butadiene Styrene (ABS)';
                        p.textContent = lang === 'zh' ? '高光澤、高剛性，適合製作外觀件' : lang === 'en' ? 'High gloss, high rigidity, suitable for making appearance parts' : 'Độ bóng cao, độ cứng cao, phù hợp để làm các bộ phận ngoại hình';
                    } else if (index === 14) {
                        h3.textContent = lang === 'zh' ? '高密度聚乙烯 (HDPE)' : lang === 'en' ? 'High Density Polyethylene (HDPE)' : 'High Density Polyethylene (HDPE)';
                        p.textContent = lang === 'zh' ? '具有良好的耐化學性和耐衝擊性，廣泛應用於包裝、管道等領域' : lang === 'en' ? 'With good chemical resistance and impact resistance, widely used in packaging, pipes and other fields' : 'Với tính chống hóa học và chống xung đột tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, ống và các lĩnh vực khác';
                    } else if (index === 15) {
                        h3.textContent = lang === 'zh' ? '線性低密度聚乙烯 (LLDPE)' : lang === 'en' ? 'Linear Low Density Polyethylene (LLDPE)' : 'Linear Low Density Polyethylene (LLDPE)';
                        p.textContent = lang === 'zh' ? '具有良好的拉伸強度和耐穿刺性，廣泛應用於包裝領域' : lang === 'en' ? 'With good tensile strength and puncture resistance, widely used in packaging field' : 'Với cường độ kéo và chống xuyên thủng tốt, được sử dụng rộng rãi trong lĩnh vực đóng gói';
                    } else if (index === 16) {
                        h3.textContent = lang === 'zh' ? '高抗衝聚苯乙烯 (HIPS)' : lang === 'en' ? 'High Impact Polystyrene (HIPS)' : 'High Impact Polystyrene (HIPS)';
                        p.textContent = lang === 'zh' ? '具有良好的衝擊強度和加工性能，廣泛應用於家電、包裝等領域' : lang === 'en' ? 'With good impact strength and processing performance, widely used in home appliances, packaging and other fields' : 'Với cường độ chống xung đột và tính xử lý tốt, được sử dụng rộng rãi trong các lĩnh vực thiết bị gia dụng, đóng gói và các lĩnh vực khác';
                    } else if (index === 17) {
                        h3.textContent = lang === 'zh' ? '通用聚苯乙烯 (GPPS)' : lang === 'en' ? 'General Purpose Polystyrene (GPPS)' : 'General Purpose Polystyrene (GPPS)';
                        p.textContent = lang === 'zh' ? '具有良好的透明度和加工性能，廣泛應用於包裝、電子等領域' : lang === 'en' ? 'With good transparency and processing performance, widely used in packaging, electronics and other fields' : 'Với độ trong suốt và tính xử lý tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, điện tử và các lĩnh vực khác';
                    } else if (index === 18) {
                        h3.textContent = lang === 'zh' ? '通用聚苯乙烯 (GPPS)' : lang === 'en' ? 'General Purpose Polystyrene (GPPS)' : 'General Purpose Polystyrene (GPPS)';
                        p.textContent = lang === 'zh' ? '高透明度、高光澤，適合製作透明製品' : lang === 'en' ? 'High transparency, high gloss, suitable for making transparent products' : 'Độ trong suốt cao, độ bóng cao, phù hợp để làm các sản phẩm trong suốt';
                    }
                    // 可降解塑料产品
                    else if (index === 19) {
                        h3.textContent = lang === 'zh' ? '聚乳酸 (PLA)' : lang === 'en' ? 'Polylactic Acid (PLA)' : 'Polylactic Acid (PLA)';
                        p.textContent = lang === 'zh' ? '由可再生資源製成，具有良好的生物降解性和生物相容性，廣泛應用於包裝、醫療等領域' : lang === 'en' ? 'Made from renewable resources, with good biodegradability and biocompatibility, widely used in packaging, medical and other fields' : 'Được làm từ các nguồn tài nguyên tái tạo, với khả năng phân hủy sinh học và tương thích sinh học tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, y tế và các lĩnh vực khác';
                    } else if (index === 20) {
                        h3.textContent = lang === 'zh' ? '聚乳酸 (PLA)' : lang === 'en' ? 'Polylactic Acid (PLA)' : 'Polylactic Acid (PLA)';
                        p.textContent = lang === 'zh' ? '高強度、高剛性，適合製作各種製品' : lang === 'en' ? 'High strength, high rigidity, suitable for making various products' : 'Cường độ cao, độ cứng cao, phù hợp để làm các sản phẩm khác nhau';
                    } else if (index === 21) {
                        h3.textContent = lang === 'zh' ? '聚對苯二甲酸乙二醇酯-1,4-環己烷二甲醇酯 (PETG)' : lang === 'en' ? 'Polyethylene Terephthalate Glycol (PETG)' : 'Polyethylene Terephthalate Glycol (PETG)';
                        p.textContent = lang === 'zh' ? '具有良好的透明度和加工性能，廣泛應用於包裝、醫療等領域' : lang === 'en' ? 'With good transparency and processing performance, widely used in packaging, medical and other fields' : 'Với độ trong suốt và tính xử lý tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, y tế và các lĩnh vực khác';
                    } else if (index === 22) {
                        h3.textContent = lang === 'zh' ? '聚對苯二甲酸環己二甲醇酯 (PCTG)' : lang === 'en' ? 'Polycyclohexylene Dimethylene Terephthalate (PCTG)' : 'Polycyclohexylene Dimethylene Terephthalate (PCTG)';
                        p.textContent = lang === 'zh' ? '具有良好的透明度和耐化學腐蝕性，廣泛應用於醫療、包裝等領域' : lang === 'en' ? 'With good transparency and chemical corrosion resistance, widely used in medical, packaging and other fields' : 'Với độ trong suốt và chống ăn mòn hóa học tốt, được sử dụng rộng rãi trong các lĩnh vực y tế, đóng gói và các lĩnh vực khác';
                    } else if (index === 23) {
                        h3.textContent = lang === 'zh' ? '聚對苯二甲酸環己二甲醇酯 (PCTG)' : lang === 'en' ? 'Polycyclohexylene Dimethylene Terephthalate (PCTG)' : 'Polycyclohexylene Dimethylene Terephthalate (PCTG)';
                        p.textContent = lang === 'zh' ? '高透明度、高韌性，適合製作各種製品' : lang === 'en' ? 'High transparency, high toughness, suitable for making various products' : 'Độ trong suốt cao, độ bền cao, phù hợp để làm các sản phẩm khác nhau';
                    }
                    // 热塑性弹性体产品
                    else if (index === 24) {
                        h3.textContent = lang === 'zh' ? '熱塑性彈性體 (TPE)' : lang === 'en' ? 'Thermoplastic Elastomer (TPE)' : 'Thermoplastic Elastomer (TPE)';
                        p.textContent = lang === 'zh' ? '具有良好的彈性和加工性能，廣泛應用於汽車、電子、醫療等領域' : lang === 'en' ? 'With good elasticity and processing performance, widely used in automotive, electronics, medical and other fields' : 'Với độ đàn hồi và tính xử lý tốt, được sử dụng rộng rãi trong các lĩnh vực ô tô, điện tử, y tế và các lĩnh vực khác';
                    } else if (index === 25) {
                        h3.textContent = lang === 'zh' ? '熱塑性彈性體 (TPE)' : lang === 'en' ? 'Thermoplastic Elastomer (TPE)' : 'Thermoplastic Elastomer (TPE)';
                        p.textContent = lang === 'zh' ? '高彈性、高韌性，適合製作各種彈性製品' : lang === 'en' ? 'High elasticity, high toughness, suitable for making various elastic products' : 'Độ đàn hồi cao, độ bền cao, phù hợp để làm các sản phẩm đàn hồi khác nhau';
                    } else if (index === 26) {
                        h3.textContent = lang === 'zh' ? '熱塑性聚氨酯 (TPU)' : lang === 'en' ? 'Thermoplastic Polyurethane (TPU)' : 'Thermoplastic Polyurethane (TPU)';
                        p.textContent = lang === 'zh' ? '具有良好的彈性、耐磨性和耐油性，廣泛應用於汽車、鞋材等領域' : lang === 'en' ? 'With good elasticity, wear resistance and oil resistance, widely used in automotive, footwear and other fields' : 'Với độ đàn hồi, chống mài mòn và chống dầu tốt, được sử dụng rộng rãi trong các lĩnh vực ô tô, giày dép và các lĩnh vực khác';
                    } else if (index === 27) {
                        h3.textContent = lang === 'zh' ? '熱塑性聚酯彈性體 (TPEE)' : lang === 'en' ? 'Thermoplastic Polyester Elastomer (TPEE)' : 'Thermoplastic Polyester Elastomer (TPEE)';
                        p.textContent = lang === 'zh' ? '具有良好的耐高溫性、耐疲勞性和耐化學腐蝕性，廣泛應用於汽車、電子等領域' : lang === 'en' ? 'With good high temperature resistance, fatigue resistance and chemical corrosion resistance, widely used in automotive, electronics and other fields' : 'Với chịu nhiệt cao, chống mỏi và chống ăn mòn hóa học tốt, được sử dụng rộng rãi trong các lĩnh vực ô tô, điện tử và các lĩnh vực khác';
                    } else if (index === 28) {
                        h3.textContent = lang === 'zh' ? '熱塑性硫化橡膠 (TPV)' : lang === 'en' ? 'Thermoplastic Vulcanizate (TPV)' : 'Thermoplastic Vulcanizate (TPV)';
                        p.textContent = lang === 'zh' ? '具有良好的耐高溫性、耐油性和耐老化性，廣泛應用於汽車、密封件等領域' : lang === 'en' ? 'With good high temperature resistance, oil resistance and aging resistance, widely used in automotive, seals and other fields' : 'Với chịu nhiệt cao, chống dầu và chống lão hóa tốt, được sử dụng rộng rãi trong các lĩnh vực ô tô, miếng đệm và các lĩnh vực khác';
                    } else if (index === 29) {
                        h3.textContent = lang === 'zh' ? '苯乙烯類熱塑性彈性體 (SBC)' : lang === 'en' ? 'Styrenic Block Copolymer (SBC)' : 'Styrenic Block Copolymer (SBC)';
                        p.textContent = lang === 'zh' ? '具有良好的彈性和加工性能，廣泛應用於鞋材、膠粘劑等領域' : lang === 'en' ? 'With good elasticity and processing performance, widely used in footwear, adhesives and other fields' : 'Với độ đàn hồi và tính xử lý tốt, được sử dụng rộng rãi trong các lĩnh vực giày dép, chất kết dính và các lĩnh vực khác';
                    }
                    // 特种材料产品
                    else if (index === 30) {
                        h3.textContent = lang === 'zh' ? '聚醚醚酮 (PEEK)' : lang === 'en' ? 'Polyether Ether Ketone (PEEK)' : 'Polyether Ether Ketone (PEEK)';
                        p.textContent = lang === 'zh' ? '具有優異的耐高溫性、耐化學腐蝕性和機械性能，廣泛應用於航空航天、醫療等高端領域' : lang === 'en' ? 'With excellent high temperature resistance, chemical corrosion resistance and mechanical properties, widely used in aerospace, medical and other high-end fields' : 'Với chịu nhiệt cao, chống ăn mòn hóa học và tính chất cơ học tuyệt vời, được sử dụng rộng rãi trong các lĩnh vực cao端 như hàng không vũ trụ, y tế';
                    } else if (index === 31) {
                        h3.textContent = lang === 'zh' ? '聚醚酰亞胺 (PEI)' : lang === 'en' ? 'Polyetherimide (PEI)' : 'Polyetherimide (PEI)';
                        p.textContent = lang === 'zh' ? '具有優異的耐高溫性、耐化學腐蝕性和電性能，廣泛應用於電子、航空航天等領域' : lang === 'en' ? 'With excellent high temperature resistance, chemical corrosion resistance and electrical properties, widely used in electronics, aerospace and other fields' : 'Với chịu nhiệt cao, chống ăn mòn hóa học và tính chất điện tuyệt vời, được sử dụng rộng rãi trong các lĩnh vực điện tử, hàng không vũ trụ và các lĩnh vực khác';
                    } else if (index === 32) {
                        h3.textContent = lang === 'zh' ? '聚苯硫醚 (PPS)' : lang === 'en' ? 'Polyphenylene Sulfide (PPS)' : 'Polyphenylene Sulfide (PPS)';
                        p.textContent = lang === 'zh' ? '具有優異的耐高溫性、耐化學腐蝕性和阻燃性，廣泛應用於電子、汽車等領域' : lang === 'en' ? 'With excellent high temperature resistance, chemical corrosion resistance and flame retardancy, widely used in electronics, automotive and other fields' : 'Với chịu nhiệt cao, chống ăn mòn hóa học và chống cháy tuyệt vời, được sử dụng rộng rãi trong các lĩnh vực điện tử, ô tô và các lĩnh vực khác';
                    } else if (index === 33) {
                        h3.textContent = lang === 'zh' ? '液晶聚合物 (LCP)' : lang === 'en' ? 'Liquid Crystal Polymer (LCP)' : 'Liquid Crystal Polymer (LCP)';
                        p.textContent = lang === 'zh' ? '具有優異的耐高溫性、耐化學腐蝕性和尺寸穩定性，廣泛應用於電子、航空航天等領域' : lang === 'en' ? 'With excellent high temperature resistance, chemical corrosion resistance and dimensional stability, widely used in electronics, aerospace and other fields' : 'Với chịu nhiệt cao, chống ăn mòn hóa học và ổn định kích thước tuyệt vời, được sử dụng rộng rãi trong các lĩnh vực điện tử, hàng không vũ trụ và các lĩnh vực khác';
                    }
                    // 其他材料产品
                    else if (index === 34) {
                        h3.textContent = lang === 'zh' ? '乙烯-醋酸乙烯酯共聚物 (EVA)' : lang === 'en' ? 'Ethylene-Vinyl Acetate Copolymer (EVA)' : 'Ethylene-Vinyl Acetate Copolymer (EVA)';
                        p.textContent = lang === 'zh' ? '具有良好的彈性、透明度和加工性能，廣泛應用於包裝、鞋材等領域' : lang === 'en' ? 'With good elasticity, transparency and processing performance, widely used in packaging, footwear and other fields' : 'Với độ đàn hồi, độ trong suốt và tính xử lý tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, giày dép và các lĩnh vực khác';
                    } else if (index === 35) {
                        h3.textContent = lang === 'zh' ? '聚甲基丙烯酸甲酯 (PMMA)' : lang === 'en' ? 'Polymethyl Methacrylate (PMMA)' : 'Polymethyl Methacrylate (PMMA)';
                        p.textContent = lang === 'zh' ? '具有優異的透明度和耐候性，廣泛應用於建築、汽車、電子等領域' : lang === 'en' ? 'With excellent transparency and weather resistance, widely used in construction, automotive, electronics and other fields' : 'Với độ trong suốt và chịu thời tiết tuyệt vời, được sử dụng rộng rãi trong các lĩnh vực xây dựng, ô tô, điện tử và các lĩnh vực khác';
                    } else if (index === 36) {
                        h3.textContent = lang === 'zh' ? '聚甲醛 (POM)' : lang === 'en' ? 'Polyoxymethylene (POM)' : 'Polyoxymethylene (POM)';
                        p.textContent = lang === 'zh' ? '具有優異的剛性、耐磨性和耐化學腐蝕性，廣泛應用於機械、汽車等領域' : lang === 'en' ? 'With excellent rigidity, wear resistance and chemical corrosion resistance, widely used in mechanical, automotive and other fields' : 'Với độ cứng, chống mài mòn và chống ăn mòn hóa học tuyệt vời, được sử dụng rộng rãi trong các lĩnh vực cơ械, ô tô và các lĩnh vực khác';
                    } else if (index === 37) {
                        h3.textContent = lang === 'zh' ? '丙烯腈-苯乙烯共聚物 (AS)' : lang === 'en' ? 'Acrylonitrile-Styrene Copolymer (AS)' : 'Acrylonitrile-Styrene Copolymer (AS)';
                        p.textContent = lang === 'zh' ? '具有良好的透明度和剛性，廣泛應用於包裝、電子等領域' : lang === 'en' ? 'With good transparency and rigidity, widely used in packaging, electronics and other fields' : 'Với độ trong suốt và độ cứng tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, điện tử và các lĩnh vực khác';
                    } else if (index === 38) {
                        h3.textContent = lang === 'zh' ? '丙烯腈-苯乙烯-丙烯酸酯共聚物 (ASA)' : lang === 'en' ? 'Acrylonitrile-Styrene-Acrylate Copolymer (ASA)' : 'Acrylonitrile-Styrene-Acrylate Copolymer (ASA)';
                        p.textContent = lang === 'zh' ? '具有良好的耐候性和衝擊強度，廣泛應用於建築、汽車等領域' : lang === 'en' ? 'With good weather resistance and impact strength, widely used in construction, automotive and other fields' : 'Với chịu thời tiết và cường độ chống xung đột tốt, được sử dụng rộng rãi trong các lĩnh vực xây dựng, ô tô và các lĩnh vực khác';
                    } else if (index === 39) {
                        h3.textContent = lang === 'zh' ? '甲基丙烯酸甲酯-丁二烯-苯乙烯共聚物 (MBS)' : lang === 'en' ? 'Methyl Methacrylate-Butadiene-Styrene Copolymer (MBS)' : 'Methyl Methacrylate-Butadiene-Styrene Copolymer (MBS)';
                        p.textContent = lang === 'zh' ? '具有良好的透明度和衝擊強度，廣泛應用於塑料改性領域' : lang === 'en' ? 'With good transparency and impact strength, widely used in plastic modification field' : 'Với độ trong suốt và cường độ chống xung đột tốt, được sử dụng rộng rãi trong lĩnh vực biến tính nhựa';
                    } else if (index === 40) {
                        h3.textContent = lang === 'zh' ? '甲基丙烯酸甲酯-苯乙烯共聚物 (MS)' : lang === 'en' ? 'Methyl Methacrylate-Styrene Copolymer (MS)' : 'Methyl Methacrylate-Styrene Copolymer (MS)';
                        p.textContent = lang === 'zh' ? '具有良好的透明度和耐候性，廣泛應用於包裝、醫療等領域' : lang === 'en' ? 'With good transparency and weather resistance, widely used in packaging, medical and other fields' : 'Với độ trong suốt và chịu thời tiết tốt, được sử dụng rộng rãi trong các lĩnh vực đóng gói, y tế và các lĩnh vực khác';
                    }
                }
            });
        }
        
        // 更新行业应用页面内容
        const industryPage = document.querySelector('.inner-page');
        if (industryPage && window.location.pathname.includes('industries.html')) {
            // 更新页面描述
            const pageParagraphs = industryPage.querySelectorAll('p');
            pageParagraphs.forEach((p, index) => {
                if (index === 0) {
                    p.textContent = lang === 'zh' ? '穩卓國際的塑料原料廣泛應用於汽車、電子、家電、醫療、包裝、建築等多個行業。我們根據不同行業的需求，提供定製化的塑料原料解決方案，幫助客戶實現產品的最佳性能。' : lang === 'en' ? 'Winzhuo International\'s plastic raw materials are widely used in automotive, electronics, home appliances, medical, packaging, construction and other industries. We provide customized plastic raw material solutions based on the needs of different industries to help customers achieve the best product performance.' : 'Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong các ngành như ô tô, điện tử, thiết bị gia dụng, y tế, đóng gói, xây dựng và các ngành khác. Chúng tôi cung cấp các giải pháp nguyên liệu nhựa được tùy chỉnh dựa trên nhu cầu của các ngành khác nhau để giúp khách hàng đạt được hiệu suất sản phẩm tốt nhất.';
                } else if (index === 1) {
                    p.textContent = lang === 'zh' ? '汽車行業對塑料原料的要求非常高，需要具備輕量化、高強度、耐高溫、耐腐蝕等特性。穩卓國際提供的塑料原料廣泛應用於汽車內飾件、外飾件、發動機部件等。' : lang === 'en' ? 'The automotive industry has very high requirements for plastic raw materials, requiring lightweight, high strength, high temperature resistance, corrosion resistance and other characteristics. Winzhuo International\'s plastic raw materials are widely used in automotive interior parts, exterior parts, engine components, etc.' : 'Ngành ô tô có các yêu cầu rất cao đối với nguyên liệu nhựa, yêu cầu nhẹ, cường độ cao, chịu nhiệt cao, chống ăn mòn và các đặc tính khác. Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong các bộ phận nội thất, ngoại thất, bộ phận động cơ ô tô, v.v.';
                } else if (index === 2) {
                    p.textContent = lang === 'zh' ? '我們的產品包括：' : lang === 'en' ? 'Our products include:' : 'Sản phẩm của chúng tôi bao gồm:';
                } else if (index === 3) {
                    p.textContent = lang === 'zh' ? '推薦材料：PP、ABS、PC/ABS、PA、PBT、TPE等' : lang === 'en' ? 'Recommended materials: PP, ABS, PC/ABS, PA, PBT, TPE, etc.' : 'Vật liệu được đề xuất: PP, ABS, PC/ABS, PA, PBT, TPE, v.v.';
                } else if (index === 4) {
                    p.textContent = lang === 'zh' ? '電子行業對塑料原料的要求主要包括絕緣性、耐熱性、阻燃性、尺寸穩定性等。穩卓國際提供的塑料原料廣泛應用於電子連接器、外殼、絕緣材料等。' : lang === 'en' ? 'The electronics industry\'s requirements for plastic raw materials mainly include insulation, heat resistance, flame retardancy, dimensional stability, etc. Winzhuo International\'s plastic raw materials are widely used in electronic connectors, housings, insulation materials, etc.' : 'Yêu cầu của ngành điện tử đối với nguyên liệu nhựa chủ yếu bao gồm cách điện, chịu nhiệt, chống cháy, ổn định kích thước, v.v. Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong connector điện tử, vỏ, vật liệu cách điện, v.v.';
                } else if (index === 5) {
                    p.textContent = lang === 'zh' ? '我們的產品包括：' : lang === 'en' ? 'Our products include:' : 'Sản phẩm của chúng tôi bao gồm:';
                } else if (index === 6) {
                    p.textContent = lang === 'zh' ? '推薦材料：PC、ABS、PC/ABS、PA、PBT、LCP等' : lang === 'en' ? 'Recommended materials: PC, ABS, PC/ABS, PA, PBT, LCP, etc.' : 'Vật liệu được đề xuất: PC, ABS, PC/ABS, PA, PBT, LCP, v.v.';
                } else if (index === 7) {
                    p.textContent = lang === 'zh' ? '家電行業對塑料原料的要求主要包括外觀美觀、耐老化、耐高溫、阻燃性等。穩卓國際提供的塑料原料廣泛應用於家電外殼、結構件、電子元件等。' : lang === 'en' ? 'The home appliances industry\'s requirements for plastic raw materials mainly include beautiful appearance, aging resistance, high temperature resistance, flame retardancy, etc. Winzhuo International\'s plastic raw materials are widely used in home appliance housings, structural components, electronic components, etc.' : 'Yêu cầu của ngành thiết bị gia dụng đối với nguyên liệu nhựa chủ yếu bao gồm ngoại hình đẹp, chống lão hóa, chịu nhiệt cao, chống cháy, v.v. Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong vỏ thiết bị gia dụng, thành phần cấu trúc, thành phần điện tử, v.v.';
                } else if (index === 8) {
                    p.textContent = lang === 'zh' ? '我們的產品包括：' : lang === 'en' ? 'Our products include:' : 'Sản phẩm của chúng tôi bao gồm:';
                } else if (index === 9) {
                    p.textContent = lang === 'zh' ? '推薦材料：PP、ABS、PC/ABS、HIPS、PS等' : lang === 'en' ? 'Recommended materials: PP, ABS, PC/ABS, HIPS, PS, etc.' : 'Vật liệu được đề xuất: PP, ABS, PC/ABS, HIPS, PS, v.v.';
                } else if (index === 10) {
                    p.textContent = lang === 'zh' ? '醫療行業對塑料原料的要求非常嚴格，需要具備生物相容性、耐消毒、耐高溫、耐腐蝕等特性。穩卓國際提供的塑料原料廣泛應用於醫療設備外殼、配件、一次性醫療用品等。' : lang === 'en' ? 'The medical industry has very strict requirements for plastic raw materials, requiring biocompatibility, disinfection resistance, high temperature resistance, corrosion resistance and other characteristics. Winzhuo International\'s plastic raw materials are widely used in medical equipment housings, accessories, disposable medical supplies, etc.' : 'Ngành y tế có các yêu cầu rất nghiêm ngặt đối với nguyên liệu nhựa, yêu cầu tương thích sinh học, chống khử trùng, chịu nhiệt cao, chống ăn mòn và các đặc tính khác. Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong vỏ thiết bị y tế, phụ kiện, dụng cụ y tế dùng một lần, v.v.';
                } else if (index === 11) {
                    p.textContent = lang === 'zh' ? '我們的產品包括：' : lang === 'en' ? 'Our products include:' : 'Sản phẩm của chúng tôi bao gồm:';
                } else if (index === 12) {
                    p.textContent = lang === 'zh' ? '推薦材料：PC、PP、PE、PVC、PEEK、PLA等' : lang === 'en' ? 'Recommended materials: PC, PP, PE, PVC, PEEK, PLA, etc.' : 'Vật liệu được đề xuất: PC, PP, PE, PVC, PEEK, PLA, v.v.';
                } else if (index === 13) {
                    p.textContent = lang === 'zh' ? '包裝行業對塑料原料的要求主要包括阻隔性、耐衝擊性、透明度、印刷性等。穩卓國際提供的塑料原料廣泛應用於食品包裝、飲料瓶、容器等。' : lang === 'en' ? 'The packaging industry\'s requirements for plastic raw materials mainly include barrier properties, impact resistance, transparency, printability, etc. Winzhuo International\'s plastic raw materials are widely used in food packaging, beverage bottles, containers, etc.' : 'Yêu cầu của ngành đóng gói đối với nguyên liệu nhựa chủ yếu bao gồm tính chất chắn chước, chống xung đột, độ trong suốt, tính in, v.v. Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong đóng gói thực phẩm, chai nước,容器, v.v.';
                } else if (index === 14) {
                    p.textContent = lang === 'zh' ? '我們的產品包括：' : lang === 'en' ? 'Our products include:' : 'Sản phẩm của chúng tôi bao gồm:';
                } else if (index === 15) {
                    p.textContent = lang === 'zh' ? '推薦材料：PE、PP、PET、PVC、PS、PLA等' : lang === 'en' ? 'Recommended materials: PE, PP, PET, PVC, PS, PLA, etc.' : 'Vật liệu được đề xuất: PE, PP, PET, PVC, PS, PLA, v.v.';
                } else if (index === 16) {
                    p.textContent = lang === 'zh' ? '建築行業對塑料原料的要求主要包括耐候性、耐老化、強度高、絕緣性等。穩卓國際提供的塑料原料廣泛應用於建築裝飾材料、管道、型材等。' : lang === 'en' ? 'The construction industry\'s requirements for plastic raw materials mainly include weather resistance, aging resistance, high strength, insulation, etc. Winzhuo International\'s plastic raw materials are widely used in building decorative materials, pipes, profiles, etc.' : 'Yêu cầu của ngành xây dựng đối với nguyên liệu nhựa chủ yếu bao gồm chịu thời tiết, chống lão hóa, cường độ cao, cách điện, v.v. Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong vật liệu装飾建築, ống, profile, v.v.';
                } else if (index === 17) {
                    p.textContent = lang === 'zh' ? '我們的產品包括：' : lang === 'en' ? 'Our products include:' : 'Sản phẩm của chúng tôi bao gồm:';
                } else if (index === 18) {
                    p.textContent = lang === 'zh' ? '推薦材料：PVC、PP、PE、PC、ABS、ASA等' : lang === 'en' ? 'Recommended materials: PVC, PP, PE, PC, ABS, ASA, etc.' : 'Vật liệu được đề xuất: PVC, PP, PE, PC, ABS, ASA, v.v.';
                }
            });
            
            // 更新行业标题
            const industryHeadings = industryPage.querySelectorAll('h3');
            industryHeadings.forEach((h3, index) => {
                if (index === 0) {
                    h3.textContent = lang === 'zh' ? '汽車行業' : lang === 'en' ? 'Automotive Industry' : 'Ngành Ô Tô';
                } else if (index === 1) {
                    h3.textContent = lang === 'zh' ? '電子行業' : lang === 'en' ? 'Electronics Industry' : 'Ngành Điện Tử';
                } else if (index === 2) {
                    h3.textContent = lang === 'zh' ? '家電行業' : lang === 'en' ? 'Home Appliances Industry' : 'Ngành Thiết Bị Gia Dụng';
                } else if (index === 3) {
                    h3.textContent = lang === 'zh' ? '醫療行業' : lang === 'en' ? 'Medical Industry' : 'Ngành Y Tế';
                } else if (index === 4) {
                    h3.textContent = lang === 'zh' ? '包裝行業' : lang === 'en' ? 'Packaging Industry' : 'Ngành Đóng Gói';
                } else if (index === 5) {
                    h3.textContent = lang === 'zh' ? '建築行業' : lang === 'en' ? 'Construction Industry' : 'Ngành Xây Dựng';
                }
            });
            
            // 更新行业产品列表
            const industryLists = industryPage.querySelectorAll('ul');
            industryLists.forEach((list, index) => {
                const items = list.querySelectorAll('li');
                if (index === 0) {
                    // 汽车行业列表
                    items.forEach((item, idx) => {
                        if (idx === 0) {
                            item.textContent = lang === 'zh' ? '內飾件：儀表板、門板、座椅部件等' : lang === 'en' ? 'Interior parts: instrument panel, door panel, seat components, etc.' : 'Các bộ phận nội thất: bảng điều khiển, bảng cửa, thành phần ghế, v.v.';
                        } else if (idx === 1) {
                            item.textContent = lang === 'zh' ? '外飾件：保險杠、格柵、車燈外殼等' : lang === 'en' ? 'Exterior parts: bumper, grille, headlight housing, etc.' : 'Các bộ phận ngoại thất: bumper, grille, vỏ đèn xe, v.v.';
                        } else if (idx === 2) {
                            item.textContent = lang === 'zh' ? '發動機部件：進氣歧管、油底殼、散熱器等' : lang === 'en' ? 'Engine components: intake manifold, oil pan, radiator, etc.' : 'Các bộ phận động cơ: ống dẫn khí, chậu dầu, tản nhiệt, v.v.';
                        } else if (idx === 3) {
                            item.textContent = lang === 'zh' ? '電氣部件：連接器、傳感器外殼等' : lang === 'en' ? 'Electrical components: connectors, sensor housings, etc.' : 'Các bộ phận điện氣: connector, vỏ cảm biến, v.v.';
                        }
                    });
                } else if (index === 1) {
                    // 电子行业列表
                    items.forEach((item, idx) => {
                        if (idx === 0) {
                            item.textContent = lang === 'zh' ? '連接器：PCB連接器、線纜連接器等' : lang === 'en' ? 'Connectors: PCB connectors, cable connectors, etc.' : 'Connector: connector PCB, connector cáp, v.v.';
                        } else if (idx === 1) {
                            item.textContent = lang === 'zh' ? '外殼：手機外殼、電腦外殼、家電外殼等' : lang === 'en' ? 'Housings: mobile phone housings, computer housings, home appliance housings, etc.' : 'Vỏ: vỏ điện thoại di động, vỏ máy tính, vỏ thiết bị gia dụng, v.v.';
                        } else if (idx === 2) {
                            item.textContent = lang === 'zh' ? '絕緣材料：線圈骨架、變壓器外殼等' : lang === 'en' ? 'Insulation materials: coil skeleton, transformer housing, etc.' : 'Vật liệu cách điện: khung cuộn dây, vỏ biến壓器, v.v.';
                        } else if (idx === 3) {
                            item.textContent = lang === 'zh' ? '光學部件：LED燈罩、導光板等' : lang === 'en' ? 'Optical components: LED lamp cover, light guide plate, etc.' : 'Thành phần quang học: vỏ đèn LED, tấm dẫn ánh, v.v.';
                        }
                    });
                } else if (index === 2) {
                    // 家电行业列表
                    items.forEach((item, idx) => {
                        if (idx === 0) {
                            item.textContent = lang === 'zh' ? '外殼：電視機外殼、洗衣機外殼、冰箱外殼等' : lang === 'en' ? 'Housings: TV housings, washing machine housings, refrigerator housings, etc.' : 'Vỏ: vỏ TV, vỏ máy giặt, vỏ tủ lạnh, v.v.';
                        } else if (idx === 1) {
                            item.textContent = lang === 'zh' ? '結構件：支架、面板、把手等' : lang === 'en' ? 'Structural components: brackets, panels, handles, etc.' : 'Thành phần cấu trúc: giá đỡ, bảng, tay cầm, v.v.';
                        } else if (idx === 2) {
                            item.textContent = lang === 'zh' ? '電子元件：繼電器外殼、開关外殼等' : lang === 'en' ? 'Electronic components: relay housings, switch housings, etc.' : 'Thành phần điện tử: vỏ relay, vỏ switch, v.v.';
                        } else if (idx === 3) {
                            item.textContent = lang === 'zh' ? '配件：旋鈕、按鍵、裝飾件等' : lang === 'en' ? 'Accessories: knobs, buttons, decorative parts, etc.' : 'Phụ kiện: nút xoay, nút bấm, phần装飾, v.v.';
                        }
                    });
                } else if (index === 3) {
                    // 医疗行业列表
                    items.forEach((item, idx) => {
                        if (idx === 0) {
                            item.textContent = lang === 'zh' ? '醫療設備外殼：監護儀外殼、呼吸機外殼等' : lang === 'en' ? 'Medical equipment housings: monitor housings, ventilator housings, etc.' : 'Vỏ thiết bị y tế: vỏ máy giám sát, vỏ máy thở, v.v.';
                        } else if (idx === 1) {
                            item.textContent = lang === 'zh' ? '配件：注射器、輸液器、導管等' : lang === 'en' ? 'Accessories: syringes, infusion sets, catheters, etc.' : 'Phụ kiện: ống tiêm, bộ truyền dịch, ống dẫn, v.v.';
                        } else if (idx === 2) {
                            item.textContent = lang === 'zh' ? '手術器械：手術刀柄、鑷子柄等' : lang === 'en' ? 'Surgical instruments: scalpel handles, forceps handles, etc.' : 'Thiết bị phẫu thuật: tay cầm dao phẫu thuật, tay cầm kẹp, v.v.';
                        } else if (idx === 3) {
                            item.textContent = lang === 'zh' ? '植入物：骨科植入物、牙科植入物等' : lang === 'en' ? 'Implants: orthopedic implants, dental implants, etc.' : 'Thiết bị cấy ghép: cấy ghép xương khớp, cấy ghép nha khoa, v.v.';
                        }
                    });
                } else if (index === 4) {
                    // 包装行业列表
                    items.forEach((item, idx) => {
                        if (idx === 0) {
                            item.textContent = lang === 'zh' ? '食品包裝：保鮮膜、塑料袋、餐盒等' : lang === 'en' ? 'Food packaging: plastic wrap, plastic bags, lunch boxes, etc.' : 'Đóng gói thực phẩm: màng bảo鲜, túi nhựa, hộp cơm, v.v.';
                        } else if (idx === 1) {
                            item.textContent = lang === 'zh' ? '飲料瓶：礦泉水瓶、飲料瓶、油瓶等' : lang === 'en' ? 'Beverage bottles: mineral water bottles, beverage bottles, oil bottles, etc.' : 'Chai nước: chai nước khoáng, chai nước uống, chai dầu, v.v.';
                        } else if (idx === 2) {
                            item.textContent = lang === 'zh' ? '容器：化妝品瓶、醫藥瓶、洗滌劑瓶等' : lang === 'en' ? 'Containers: cosmetic bottles, pharmaceutical bottles, detergent bottles, etc.' : 'Container: chai mỹ phẩm, chai dược phẩm, chai dầu xả, v.v.';
                        } else if (idx === 3) {
                            item.textContent = lang === 'zh' ? '包裝膜：拉伸膜、收縮膜、複合膜等' : lang === 'en' ? 'Packaging films: stretch film, shrink film, composite film, etc.' : 'Màng đóng gói: màng co giãn, màng co lại, màng复合, v.v.';
                        }
                    });
                } else if (index === 5) {
                    // 建筑行业列表
                    items.forEach((item, idx) => {
                        if (idx === 0) {
                            item.textContent = lang === 'zh' ? '建築裝飾材料：天花板、地板、墻板等' : lang === 'en' ? 'Building decorative materials: ceiling, flooring, wall panels, etc.' : 'Vật liệu装飾建築: trần nhà, sàn, bảng tường, v.v.';
                        } else if (idx === 1) {
                            item.textContent = lang === 'zh' ? '管道：給排水管、燃氣管、電線套管等' : lang === 'en' ? 'Pipes: water supply and drainage pipes, gas pipes, wire casing, etc.' : 'Ống: ống cấp thoát nước, ống gas, ống bảo vệ dây điện, v.v.';
                        } else if (idx === 2) {
                            item.textContent = lang === 'zh' ? '型材：門窗型材、護欄型材等' : lang === 'en' ? 'Profiles: door and window profiles, guardrail profiles, etc.' : 'Profile: profile cửa sổ, profile hàng rào, v.v.';
                        } else if (idx === 3) {
                            item.textContent = lang === 'zh' ? '絕緣材料：電纜絕緣層、開關面板等' : lang === 'en' ? 'Insulation materials: cable insulation layer, switch panel, etc.' : 'Vật liệu cách điện: lớp cách điện cáp, bảng switch, v.v.';
                        }
                    });
                }
            });
        }
        
        // 更新案例页面内容
        const casePage = document.querySelector('.inner-page');
        if (casePage && window.location.pathname.includes('cases.html')) {
            // 更新页面描述
            const pageParagraphs = casePage.querySelectorAll('p');
            if (pageParagraphs.length > 0) {
                pageParagraphs[0].textContent = lang === 'zh' ? '穩卓國際的塑膠原料廣泛應用於各個行業，以下是我們的一些成功案例。這些案例展示了我們如何為不同行業的客戶提供定制化的塑膠原料解決方案，幫助他們實現產品的最佳性能。' : lang === 'en' ? 'Winzhuo International\'s plastic raw materials are widely used in various industries. Here are some of our successful cases. These cases show how we provide customized plastic raw material solutions for customers in different industries to help them achieve the best product performance.' : 'Nguyên liệu nhựa của Winzhuo International được sử dụng rộng rãi trong các ngành nghề khác nhau. Dưới đây là một số trường hợp thành công của chúng tôi. Những trường hợp này cho thấy cách chúng tôi cung cấp các giải pháp nguyên liệu nhựa được tùy chỉnh cho khách hàng trong các ngành khác nhau để giúp họ đạt được hiệu suất sản phẩm tốt nhất.';
            }
            
            // 更新案例项
            const caseItems = casePage.querySelectorAll('.case-item');
            caseItems.forEach((item, index) => {
                const h3 = item.querySelector('h3');
                const p = item.querySelector('p');
                if (h3 && p) {
                    if (index === 0) {
                        h3.textContent = lang === 'zh' ? '汽車內飾件' : lang === 'en' ? 'Automotive Interior Parts' : 'Các Bộ Phận Nội Thất Ô Tô';
                        p.textContent = lang === 'zh' ? '為知名汽車製造商提供高品質的PP和ABS原料，用於生產儀表板、門板等內飾件，具有優異的耐熱性和耐磨性。' : lang === 'en' ? 'Provided high-quality PP and ABS raw materials for well-known automotive manufacturers, used in the production of instrument panels, door panels and other interior parts, with excellent heat resistance and wear resistance.' : 'Cung cấp nguyên liệu PP và ABS chất lượng cao cho các nhà sản xuất ô tô nổi tiếng, được sử dụng trong sản xuất bảng điều khiển, bảng cửa và các bộ phận nội thất khác, với khả năng chịu nhiệt và chống mài mòn xuất sắc.';
                    } else if (index === 1) {
                        h3.textContent = lang === 'zh' ? '家電外殼組件' : lang === 'en' ? 'Home Appliance Housing Components' : 'Thành Phần Vỏ Thiết Bị Gia Dụng';
                        p.textContent = lang === 'zh' ? '為家電品牌提供HIPS和ABS原料，用於生產電視機、洗衣機等家電外殼，具有良好的外觀和耐老化性能。' : lang === 'en' ? 'Provided HIPS and ABS raw materials for home appliance brands, used in the production of TV, washing machine and other home appliance housings, with good appearance and aging resistance.' : 'Cung cấp nguyên liệu HIPS và ABS cho các thương hiệu thiết bị gia dụng, được sử dụng trong sản xuất vỏ TV, máy giặt và các thiết bị gia dụng khác, với ngoại hình đẹp và khả năng chống lão hóa tốt.';
                    } else if (index === 2) {
                        h3.textContent = lang === 'zh' ? '電子連接器外殼' : lang === 'en' ? 'Electronic Connector Housing' : 'Vỏ Connector Điện Tử';
                        p.textContent = lang === 'zh' ? '為電子製造商提供LCP和PBT原料，用於生產高精度電子連接器外殼，具有優異的尺寸穩定性和電絕緣性能。' : lang === 'en' ? 'Provided LCP and PBT raw materials for electronic manufacturers, used in the production of high-precision electronic connector housings, with excellent dimensional stability and electrical insulation performance.' : 'Cung cấp nguyên liệu LCP và PBT cho các nhà sản xuất điện tử, được sử dụng trong sản xuất vỏ connector điện tử có độ chính xác cao, với ổn định kích thước và hiệu suất cách điện tuyệt vời.';
                    } else if (index === 3) {
                        h3.textContent = lang === 'zh' ? '醫療設備外殼' : lang === 'en' ? 'Medical Equipment Housing' : 'Vỏ Thiết Bị Y Tế';
                        p.textContent = lang === 'zh' ? '為醫療設備製造商提供PEEK原料，用於生產醫療設備外殼，具有優異的生物相容性和耐消毒性能。' : lang === 'en' ? 'Provided PEEK raw materials for medical equipment manufacturers, used in the production of medical equipment housings, with excellent biocompatibility and disinfection resistance.' : 'Cung cấp nguyên liệu PEEK cho các nhà sản xuất thiết bị y tế, được sử dụng trong sản xuất vỏ thiết bị y tế, với tương thích sinh học và khả năng chống khử trùng tuyệt vời.';
                    } else if (index === 4) {
                        h3.textContent = lang === 'zh' ? '食品包裝容器' : lang === 'en' ? 'Food Packaging Containers' : 'Container Đóng Gói Thực Phẩm';
                        p.textContent = lang === 'zh' ? '為包裝製造商提供PP和PET原料，用於生產食品包裝容器，具有良好的透明度和食品安全性能。' : lang === 'en' ? 'Provided PP and PET raw materials for packaging manufacturers, used in the production of food packaging containers, with good transparency and food safety performance.' : 'Cung cấp nguyên liệu PP và PET cho các nhà sản xuất đóng gói, được sử dụng trong sản xuất container đóng gói thực phẩm, với độ trong suốt tốt và hiệu suất an toàn thực phẩm.';
                    } else if (index === 5) {
                        h3.textContent = lang === 'zh' ? '建築裝飾材料' : lang === 'en' ? 'Building Decorative Materials' : 'Vật Liệu Trang Trí Xây Dựng';
                        p.textContent = lang === 'zh' ? '為建築材料製造商提供PVC和ASA原料，用於生產建築裝飾材料，具有優異的耐候性和抗老化性能。' : lang === 'en' ? 'Provided PVC and ASA raw materials for building material manufacturers, used in the production of building decorative materials, with excellent weather resistance and aging resistance.' : 'Cung cấp nguyên liệu PVC và ASA cho các nhà sản xuất vật liệu xây dựng, được sử dụng trong sản xuất vật liệu trang trí xây dựng, với khả năng chịu thời tiết và chống lão hóa tuyệt vời.';
                    } else if (index === 6) {
                        h3.textContent = lang === 'zh' ? '耳機外殼' : lang === 'en' ? 'Headphone Housing' : 'Vỏ Tai Nghe';
                        p.textContent = lang === 'zh' ? '為音頻設備製造商提供ABS和PC原料，用於生產耳機外殼，具有良好的外觀和衝擊強度。' : lang === 'en' ? 'Provided ABS and PC raw materials for audio equipment manufacturers, used in the production of headphone housings, with good appearance and impact strength.' : 'Cung cấp nguyên liệu ABS và PC cho các nhà sản xuất thiết bị âm thanh, được sử dụng trong sản xuất vỏ tai nghe, với ngoại hình đẹp và cường độ chống xung đột tốt.';
                    } else if (index === 7) {
                        h3.textContent = lang === 'zh' ? '工業齒輪和軸承' : lang === 'en' ? 'Industrial Gears and Bearings' : 'Bánh Răng và Bi Kep Công Nghiệp';
                        p.textContent = lang === 'zh' ? '為機械製造商提供POM原料，用於生產工業齒輪和軸承，具有優異的耐磨性和低摩擦係數。' : lang === 'en' ? 'Provided POM raw materials for mechanical manufacturers, used in the production of industrial gears and bearings, with excellent wear resistance and low friction coefficient.' : 'Cung cấp nguyên liệu POM cho các nhà sản xuất cơ械, được sử dụng trong sản xuất bánh răng và bi kep công nghiệp, với khả năng chống mài mòn tuyệt vời và hệ số ma sát thấp.';
                    } else if (index === 8) {
                        h3.textContent = lang === 'zh' ? 'LED燈具外殼' : lang === 'en' ? 'LED Lighting Housing' : 'Vỏ Đèn LED';
                        p.textContent = lang === 'zh' ? '為照明設備製造商提供PC和ABS原料，用於生產LED燈具外殼，具有優異的耐熱性、阻燃性和透明度。' : lang === 'en' ? 'Provided PC and ABS raw materials for lighting equipment manufacturers, used in the production of LED lighting housings, with excellent heat resistance, flame retardancy and transparency.' : 'Cung cấp nguyên liệu PC và ABS cho các nhà sản xuất thiết bị chiếu sáng, được sử dụng trong sản xuất vỏ đèn LED, với khả năng chịu nhiệt, chống cháy và độ trong suốt tuyệt vời.';
                    } else if (index === 9) {
                        h3.textContent = lang === 'zh' ? '一次性包裝盒' : lang === 'en' ? 'Disposable Packaging Boxes' : 'Hộp Đóng Gói Một Lần';
                        p.textContent = lang === 'zh' ? '為食品包裝企業提供PP和PS原料，用於生產一次性餐盒和食品包裝容器，具有良好的耐熱性和食品安全性能。' : lang === 'en' ? 'Provided PP and PS raw materials for food packaging companies, used in the production of disposable lunch boxes and food packaging containers, with good heat resistance and food safety performance.' : 'Cung cấp nguyên liệu PP và PS cho các công ty đóng gói thực phẩm, được sử dụng trong sản xuất hộp cơm một lần và container đóng gói thực phẩm, với khả năng chịu nhiệt và an toàn thực phẩm tốt.';
                    } else if (index === 10) {
                        h3.textContent = lang === 'zh' ? '醫療器械' : lang === 'en' ? 'Medical Devices' : 'Thiết Bị Y Tế';
                        p.textContent = lang === 'zh' ? '為醫療器械製造商提供PP和PE原料，用於生產各種醫療器械外殼和配件，具有優異的生物相容性和耐消毒性能。' : lang === 'en' ? 'Provided PP and PE raw materials for medical device manufacturers, used in the production of various medical device housings and accessories, with excellent biocompatibility and disinfection resistance.' : 'Cung cấp nguyên liệu PP và PE cho các nhà sản xuất thiết bị y tế, được sử dụng trong sản xuất vỏ và phụ kiện thiết bị y tế khác nhau, với tương thích sinh học và khả năng chống khử trùng tuyệt vời.';
                    } else if (index === 11) {
                        h3.textContent = lang === 'zh' ? '嬰兒餐具食品級' : lang === 'en' ? 'Baby Tableware Food Grade' : 'Đồ Ăn Bé Ngoại Bậc Thực Phẩm';
                        p.textContent = lang === 'zh' ? '為嬰童用品品牌提供食品級PP和矽膠原料，用於生產嬰兒餐具和用品，確保產品安全無毒，符合國際標準。' : lang === 'en' ? 'Provided food-grade PP and silicone raw materials for baby products brands, used in the production of baby tableware and products, ensuring safe and non-toxic products that meet international standards.' : 'Cung cấp nguyên liệu PP và silicone bậc thực phẩm cho các thương hiệu sản phẩm cho trẻ em, được sử dụng trong sản xuất đồ ăn và sản phẩm cho bé, đảm bảo sản phẩm an toàn không độc và đáp ứng các tiêu chuẩn quốc tế.';
                    } else if (index === 12) {
                        h3.textContent = lang === 'zh' ? '智能手錶' : lang === 'en' ? 'Smart Watches' : 'Đồng Hồ Thông Minh';
                        p.textContent = lang === 'zh' ? '為穿戴設備廠商提供PC和ABS原料，用於生產智能手錶外殼，具有良好的耐衝擊性和耐候性，確保產品外觀持久美觀。' : lang === 'en' ? 'Provided PC and ABS raw materials for wearable device manufacturers, used in the production of smart watch housings, with good impact resistance and weather resistance, ensuring the product appearance remains beautiful for a long time.' : 'Cung cấp nguyên liệu PC và ABS cho các nhà sản xuất thiết bị đeo, được sử dụng trong sản xuất vỏ đồng hồ thông minh, với khả năng chống xung đột và chịu thời tiết tốt, đảm bảo ngoại hình sản phẩm luôn đẹp trong thời gian dài.';
                    } else if (index === 13) {
                        h3.textContent = lang === 'zh' ? '汽車中控台' : lang === 'en' ? 'Automotive Center Console' : 'Bảng Điều Khiển Trung Tâm Ô Tô';
                        p.textContent = lang === 'zh' ? '為汽車零部件供應商提供高品質的ABS和PC/ABS合金原料，用於生產汽車中控台，具有優異的耐熱性、耐磨性和良好的外觀。' : lang === 'en' ? 'Provided high-quality ABS and PC/ABS alloy raw materials for automotive parts suppliers, used in the production of automotive center consoles, with excellent heat resistance, wear resistance and good appearance.' : 'Cung cấp nguyên liệu hợp kim ABS và PC/ABS chất lượng cao cho các nhà cung cấp bộ phận ô tô, được sử dụng trong sản xuất bảng điều khiển trung tâm ô tô, với khả năng chịu nhiệt, chống mài mòn và ngoại hình tốt.';
                    } else if (index === 14) {
                        h3.textContent = lang === 'zh' ? '汽車外殼' : lang === 'en' ? 'Automotive Exterior' : 'Ngoại Thất Ô Tô';
                        p.textContent = lang === 'zh' ? '為汽車製造商提供高強度的PP和ABS原料，用於生產汽車外殼和保險杠，具有優異的抗衝擊性和耐候性。' : lang === 'en' ? 'Provided high-strength PP and ABS raw materials for automotive manufacturers, used in the production of automotive exteriors and bumpers, with excellent impact resistance and weather resistance.' : 'Cung cấp nguyên liệu PP và ABS có cường độ cao cho các nhà sản xuất ô tô, được sử dụng trong sản xuất ngoại thất ô tô và bumper, với khả năng chống xung đột và chịu thời tiết tuyệt vời.';
                    } else if (index === 15) {
                        h3.textContent = lang === 'zh' ? '汽車腳墊' : lang === 'en' ? 'Automotive Floor Mats' : 'Thảm Sàn Ô Tô';
                        p.textContent = lang === 'zh' ? '為汽車用品廠商提供TPE和PVC原料，用於生產汽車腳墊，具有良好的防滑性、耐汙性和易清潔性能。' : lang === 'en' ? 'Provided TPE and PVC raw materials for automotive accessories manufacturers, used in the production of automotive floor mats, with good anti-slip, stain resistance and easy cleaning performance.' : 'Cung cấp nguyên liệu TPE và PVC cho các nhà sản xuất phụ kiện ô tô, được sử dụng trong sản xuất thảm sàn ô tô, với khả năng chống trượt, chống bẩn và dễ làm sạch tốt.';
                    } else if (index === 16) {
                        h3.textContent = lang === 'zh' ? '潛水用品' : lang === 'en' ? 'Diving Equipment' : 'Thiết Bị Lặn';
                        p.textContent = lang === 'zh' ? '為戶外用品品牌提供TPE和PVC原料，用於生產潛水服、呼吸管等潛水裝備，具有優異的防水性和彈性。' : lang === 'en' ? 'Provided TPE and PVC raw materials for outdoor products brands, used in the production of wetsuits, snorkels and other diving equipment, with excellent waterproof and elastic properties.' : 'Cung cấp nguyên liệu TPE và PVC cho các thương hiệu sản phẩm ngoài trời, được sử dụng trong sản xuất áo lặn, ống thở và thiết bị lặn khác, với tính năng chống thấm nước và đàn hồi tuyệt vời.';
                    } else if (index === 17) {
                        h3.textContent = lang === 'zh' ? '電動工具外殼' : lang === 'en' ? 'Power Tool Housing' : 'Vỏ Công Cụ Điện';
                        p.textContent = lang === 'zh' ? '為電動工具製造商提供ABS和PC原料，用於生產電鑽、砂輪機等電動工具外殼，具有優異的抗衝擊性和耐老化性能。' : lang === 'en' ? 'Provided ABS and PC raw materials for power tool manufacturers, used in the production of electric drills, grinders and other power tool housings, with excellent impact resistance and aging resistance.' : 'Cung cấp nguyên liệu ABS và PC cho các nhà sản xuất công cụ điện, được sử dụng trong sản xuất vỏ máy khoan điện, máy mài và công cụ điện khác, với khả năng chống xung đột và chống lão hóa tuyệt vời.';
                    } else if (index === 18) {
                        h3.textContent = lang === 'zh' ? '電子產品外殼' : lang === 'en' ? 'Electronic Product Housing' : 'Vỏ Sản Phẩm Điện Tử';
                        p.textContent = lang === 'zh' ? '為消費電子品牌提供ABS和PC原料，用於生產手機、平板電腦等電子產品外殼，具有良好的外觀和抗衝擊性能。' : lang === 'en' ? 'Provided ABS and PC raw materials for consumer electronics brands, used in the production of mobile phones, tablets and other electronic product housings, with good appearance and impact resistance.' : 'Cung cấp nguyên liệu ABS và PC cho các thương hiệu điện tử tiêu dùng, được sử dụng trong sản xuất vỏ điện thoại di động, máy tính bảng và sản phẩm điện tử khác, với ngoại hình đẹp và khả năng chống xung đột tốt.';
                    } else if (index === 19) {
                        h3.textContent = lang === 'zh' ? '電子測試工具' : lang === 'en' ? 'Electronic Testing Tools' : 'Công Cụ Kiểm Tra Điện Tử';
                        p.textContent = lang === 'zh' ? '為測試設備廠商提供ABS和PC原料，用於生產各種電子測試儀器外殼，具有良好的絕緣性能和結構強度。' : lang === 'en' ? 'Provided ABS and PC raw materials for testing equipment manufacturers, used in the production of various electronic testing instrument housings, with good insulation performance and structural strength.' : 'Cung cấp nguyên liệu ABS và PC cho các nhà sản xuất thiết bị kiểm tra, được sử dụng trong sản xuất vỏ儀器 kiểm tra điện tử khác nhau, với hiệu suất cách điện và cường độ cấu trúc tốt.';
                    } else if (index === 20) {
                        h3.textContent = lang === 'zh' ? '電子煙外殼' : lang === 'en' ? 'E-cigarette Housing' : 'Vỏ Thuốc Lá Điện Tử';
                        p.textContent = lang === 'zh' ? '為電子煙製造商提供PC和ABS原料，用於生產電子煙外殼，具有良好的外觀、耐熱性和抗衝擊性能。' : lang === 'en' ? 'Provided PC and ABS raw materials for e-cigarette manufacturers, used in the production of e-cigarette housings, with good appearance, heat resistance and impact resistance.' : 'Cung cấp nguyên liệu PC và ABS cho các nhà sản xuất thuốc lá điện tử, được sử dụng trong sản xuất vỏ thuốc lá điện tử, với ngoại hình đẹp, khả năng chịu nhiệt và chống xung đột tốt';
                    } else if (index === 21) {
                        h3.textContent = lang === 'zh' ? '電子連接器' : lang === 'en' ? 'Electronic Connectors' : 'Connector Điện Tử';
                        p.textContent = lang === 'zh' ? '為電子元件製造商提供LCP和PBT原料，用於生產各種電子連接器，具有優異的電絕緣性能和尺寸穩定性。' : lang === 'en' ? 'Provided LCP and PBT raw materials for electronic component manufacturers, used in the production of various electronic connectors, with excellent electrical insulation performance and dimensional stability.' : 'Cung cấp nguyên liệu LCP và PBT cho các nhà sản xuất thành phần điện tử, được sử dụng trong sản xuất connector điện tử khác nhau, với hiệu suất cách điện và ổn định kích thước tuyệt vời.';
                    } else if (index === 22) {
                        h3.textContent = lang === 'zh' ? '電源線' : lang === 'en' ? 'Power Cords' : 'Dây Cáp Điện';
                        p.textContent = lang === 'zh' ? '為電線電纜廠商提供PVC和PE原料，用於生產電源線和數據線的絕緣層，具有優異的電絕緣性能和耐老化性能。' : lang === 'en' ? 'Provided PVC and PE raw materials for wire and cable manufacturers, used in the production of insulation layers for power cords and data cables, with excellent electrical insulation performance and aging resistance.' : 'Cung cấp nguyên liệu PVC và PE cho các nhà sản xuất dây và cáp, được sử dụng trong sản xuất lớp cách điện cho dây nguồn và cáp dữ liệu, với hiệu suất cách điện và khả năng chống lão hóa tuyệt vời.';
                    } else if (index === 23) {
                        h3.textContent = lang === 'zh' ? '空調外殼' : lang === 'en' ? 'Air Conditioner Housing' : 'Vỏ Máy Lạnh';
                        p.textContent = lang === 'zh' ? '為家電製造商提供ABS和HIPS原料，用於生產空調外殼，具有良好的耐候性、耐熱性和外觀。' : lang === 'en' ? 'Provided ABS and HIPS raw materials for home appliance manufacturers, used in the production of air conditioner housings, with good weather resistance, heat resistance and appearance.' : 'Cung cấp nguyên liệu ABS và HIPS cho các nhà sản xuất thiết bị gia dụng, được sử dụng trong sản xuất vỏ máy lạnh, với khả năng chịu thời tiết, chịu nhiệt và ngoại hình tốt.';
                    } else if (index === 24) {
                        h3.textContent = lang === 'zh' ? '家電外殼組件' : lang === 'en' ? 'Home Appliance Housing Components' : 'Thành Phần Vỏ Thiết Bị Gia Dụng';
                        p.textContent = lang === 'zh' ? '為家電品牌提供高品質的ABS和PC原料，用於生產各種家電外殼組件，具有良好的外觀、耐熱性和抗衝擊性能。' : lang === 'en' ? 'Provided high-quality ABS and PC raw materials for home appliance brands, used in the production of various home appliance housing components, with good appearance, heat resistance and impact resistance.' : 'Cung cấp nguyên liệu ABS và PC chất lượng cao cho các thương hiệu thiết bị gia dụng, được sử dụng trong sản xuất thành phần vỏ thiết bị gia dụng khác nhau, với ngoại hình đẹp, khả năng chịu nhiệt và chống xung đột tốt.';
                    } else if (index === 25) {
                        h3.textContent = lang === 'zh' ? '建築裝飾材料' : lang === 'en' ? 'Building Decorative Materials' : 'Vật Liệu Trang Trí Xây Dựng';
                        p.textContent = lang === 'zh' ? '為建築材料製造商提供PVC和ASA原料，用於生產建築裝飾材料，具有優異的耐候性、抗老化性能和良好的外觀。' : lang === 'en' ? 'Provided PVC and ASA raw materials for building material manufacturers, used in the production of building decorative materials, with excellent weather resistance, aging resistance and good appearance.' : 'Cung cấp nguyên liệu PVC và ASA cho các nhà sản xuất vật liệu xây dựng, được sử dụng trong sản xuất vật liệu trang trí xây dựng, với khả năng chịu thời tiết, chống lão hóa và ngoại hình tốt.';
                    } else if (index === 26) {
                        h3.textContent = lang === 'zh' ? '鞋底' : lang === 'en' ? 'Shoe Soles' : 'Đáy Giày';
                        p.textContent = lang === 'zh' ? '為製鞋企業提供TPU和EVA原料，用於生產各種鞋類鞋底，具有優異的耐磨性、彈性和緩衝性能。' : lang === 'en' ? 'Provided TPU and EVA raw materials for shoe manufacturers, used in the production of various shoe soles, with excellent wear resistance, elasticity and cushioning performance.' : 'Cung cấp nguyên liệu TPU và EVA cho các nhà sản xuất giày, được sử dụng trong sản xuất đế giày khác nhau, với khả năng chống mài mòn, đàn hồi và đệm tuyệt vời.';
                    }
                }
            });
        }
        
        // 更新品牌页面内容
        const brandPage = document.querySelector('.inner-page');
        if (brandPage && window.location.pathname.includes('brands.html')) {
            // 更新页面描述
            const pageParagraphs = brandPage.querySelectorAll('p');
            if (pageParagraphs.length > 0) {
                pageParagraphs[0].textContent = lang === 'zh' ? '穩卓國際与多家国际知名塑料原料生产商建立了长期稳定的合作关系，代理销售多个国际知名品牌的塑料原料。这些合作品牌在各自领域都具有领先地位，为我们提供高质量的产品支持。' : lang === 'en' ? 'Winzhuo International has established long-term stable cooperative relationships with many international well-known plastic raw material manufacturers, acting as an agent for the sale of plastic raw materials from multiple international well-known brands. These cooperative brands have leading positions in their respective fields, providing us with high-quality product support.' : 'Winzhuo International đã thiết lập mối quan hệ hợp tác lâu dài ổn định với nhiều nhà sản xuất nguyên liệu nhựa nổi tiếng quốc tế, làm đại lý bán nguyên liệu nhựa từ nhiều thương hiệu nổi tiếng quốc tế. Các thương hiệu hợp tác này có vị trí hàng đầu trong các lĩnh vực tương ứng của họ, cung cấp cho chúng tôi hỗ trợ sản phẩm chất lượng cao.';
            }
            
            // 更新品牌项
            const brandItems = brandPage.querySelectorAll('.brand-item');
            brandItems.forEach((item, index) => {
                const h3 = item.querySelector('h3');
                const p = item.querySelector('p');
                if (h3 && p) {
                    if (index === 0) {
                        h3.textContent = lang === 'zh' ? '巴斯夫 (BASF)' : lang === 'en' ? 'BASF' : 'BASF';
                        p.textContent = lang === 'zh' ? '全球领先的化工公司，提供广泛的塑料原料产品' : lang === 'en' ? 'Global leading chemical company, providing a wide range of plastic raw material products' : 'Công ty hóa học hàng đầu toàn cầu, cung cấp nhiều sản phẩm nguyên liệu nhựa';
                    } else if (index === 1) {
                        h3.textContent = lang === 'zh' ? '陶氏化学 (Dow Chemical)' : lang === 'en' ? 'Dow Chemical' : 'Dow Chemical';
                        p.textContent = lang === 'zh' ? '全球领先的材料科学公司，提供创新的塑料解决方案' : lang === 'en' ? 'Global leading materials science company, providing innovative plastic solutions' : 'Công ty khoa học vật liệu hàng đầu toàn cầu, cung cấp các giải pháp nhựa sáng tạo';
                    } else if (index === 2) {
                        h3.textContent = lang === 'zh' ? '杜邦 (DuPont)' : lang === 'en' ? 'DuPont' : 'DuPont';
                        p.textContent = lang === 'zh' ? '全球知名的化工公司，提供高性能塑料原料' : lang === 'en' ? 'World-renowned chemical company, providing high-performance plastic raw materials' : 'Công ty hóa học nổi tiếng thế giới, cung cấp nguyên liệu nhựa hiệu suất cao';
                    } else if (index === 3) {
                        h3.textContent = lang === 'zh' ? '沙特基础工业 (SABIC)' : lang === 'en' ? 'SABIC' : 'SABIC';
                        p.textContent = lang === 'zh' ? '全球领先的多元化化工公司，提供各种塑料原料' : lang === 'en' ? 'Global leading diversified chemical company, providing various plastic raw materials' : 'Công ty hóa học đa ngành hàng đầu toàn cầu, cung cấp các nguyên liệu nhựa khác nhau';
                    } else if (index === 4) {
                        h3.textContent = lang === 'zh' ? 'LG化学' : lang === 'en' ? 'LG Chemical' : 'LG Chemical';
                        p.textContent = lang === 'zh' ? '韩国知名化工公司，提供高品质塑料原料' : lang === 'en' ? 'South Korean well-known chemical company, providing high-quality plastic raw materials' : 'Công ty hóa học nổi tiếng Hàn Quốc, cung cấp nguyên liệu nhựa chất lượng cao';
                    } else if (index === 5) {
                        h3.textContent = lang === 'zh' ? '日本东丽 (Toray)' : lang === 'en' ? 'Toray' : 'Toray';
                        p.textContent = lang === 'zh' ? '日本知名化工公司，提供高性能纤维和塑料' : lang === 'en' ? 'Japanese well-known chemical company, providing high-performance fibers and plastics' : 'Công ty hóa học nổi tiếng Nhật Bản, cung cấp sợi và nhựa hiệu suất cao';
                    } else if (index === 6) {
                        h3.textContent = lang === 'zh' ? '台湾奇美 (Chimei)' : lang === 'en' ? 'Chimei' : 'Chimei';
                        p.textContent = lang === 'zh' ? '台湾知名塑料生产商，提供ABS等通用塑料' : lang === 'en' ? 'Taiwan well-known plastic manufacturer, providing ABS and other general plastics' : 'Nhà sản xuất nhựa nổi tiếng Đài Loan, cung cấp ABS và các nhựa chung khác';
                    } else if (index === 7) {
                        h3.textContent = lang === 'zh' ? 'WinFlex (自主品牌)' : lang === 'en' ? 'WinFlex (Self-owned Brand)' : 'WinFlex (Thương Hiệu Tự Doanh Nghiệp)';
                        p.textContent = lang === 'zh' ? '穩卓國際自主品牌，專注於熱塑性彈性體的研發和生產' : lang === 'en' ? 'Winzhuo International\'s self-owned brand, focusing on the R&D and production of thermoplastic elastomers' : 'Thương hiệu tự doanh nghiệp của Winzhuo International, tập trung vào nghiên cứu và phát triển cũng như sản xuất elastomer nhiệt dính';
                    } else if (index === 8) {
                        h3.textContent = lang === 'zh' ? '旭化成杜邦 (Asahi-DuPont)' : lang === 'en' ? 'Asahi-DuPont' : 'Asahi-DuPont';
                        p.textContent = lang === 'zh' ? '日本知名化工公司，提供高性能塑料原料' : lang === 'en' ? 'Japanese well-known chemical company, providing high-performance plastic raw materials' : 'Công ty hóa học nổi tiếng Nhật Bản, cung cấp nguyên liệu nhựa hiệu suất cao';
                    } else if (index === 9) {
                        h3.textContent = lang === 'zh' ? '巴塞尔 (Basell)' : lang === 'en' ? 'Basell' : 'Basell';
                        p.textContent = lang === 'zh' ? '全球领先的聚烯烃生产商' : lang === 'en' ? 'Global leading polyolefin manufacturer' : 'Nhà sản xuất polyolefin hàng đầu toàn cầu';
                    } else if (index === 10) {
                        h3.textContent = lang === 'zh' ? '拜耳 (Bayer)' : lang === 'en' ? 'Bayer' : 'Bayer';
                        p.textContent = lang === 'zh' ? '德国知名化工公司，提供高品质塑料原料' : lang === 'en' ? 'German well-known chemical company, providing high-quality plastic raw materials' : 'Công ty hóa học nổi tiếng Đức, cung cấp nguyên liệu nhựa chất lượng cao';
                    } else if (index === 11) {
                        h3.textContent = lang === 'zh' ? '电气化学 (Denka)' : lang === 'en' ? 'Denka' : 'Denka';
                        p.textContent = lang === 'zh' ? '日本知名化工公司，提供特种塑料原料' : lang === 'en' ? 'Japanese well-known chemical company, providing specialty plastic raw materials' : 'Công ty hóa học nổi tiếng Nhật Bản, cung cấp nguyên liệu nhựa đặc biệt';
                    } else if (index === 12) {
                        h3.textContent = lang === 'zh' ? '埃克森美孚 (ExxonMobil)' : lang === 'en' ? 'ExxonMobil' : 'ExxonMobil';
                        p.textContent = lang === 'zh' ? '全球领先的石油化工公司，提供各种塑料原料' : lang === 'en' ? 'Global leading petrochemical company, providing various plastic raw materials' : 'Công ty hoá dầu hàng đầu toàn cầu, cung cấp các nguyên liệu nhựa khác nhau';
                    } else if (index === 13) {
                        h3.textContent = lang === 'zh' ? '三菱化学 (Mitsubishi)' : lang === 'en' ? 'Mitsubishi Chemical' : 'Mitsubishi Chemical';
                        p.textContent = lang === 'zh' ? '日本知名化工公司，提供高性能塑料原料' : lang === 'en' ? 'Japanese well-known chemical company, providing high-performance plastic raw materials' : 'Công ty hóa học nổi tiếng Nhật Bản, cung cấp nguyên liệu nhựa hiệu suất cao';
                    } else if (index === 14) {
                        h3.textContent = lang === 'zh' ? '三星 (Samsung)' : lang === 'en' ? 'Samsung' : 'Samsung';
                        p.textContent = lang === 'zh' ? '韩国知名企业，提供高品质塑料原料' : lang === 'en' ? 'South Korean well-known enterprise, providing high-quality plastic raw materials' : 'Doanh nghiệp nổi tiếng Hàn Quốc, cung cấp nguyên liệu nhựa chất lượng cao';
                    } else if (index === 15) {
                        h3.textContent = lang === 'zh' ? '住友化学 (Sumitomo Chemical)' : lang === 'en' ? 'Sumitomo Chemical' : 'Sumitomo Chemical';
                        p.textContent = lang === 'zh' ? '日本知名化工公司，提供高性能塑料原料' : lang === 'en' ? 'Japanese well-known chemical company, providing high-performance plastic raw materials' : 'Công ty hóa học nổi tiếng Nhật Bản, cung cấp nguyên liệu nhựa hiệu suất cao';
                    } else if (index === 16) {
                        h3.textContent = lang === 'zh' ? '宇部兴产 (Ube)' : lang === 'en' ? 'Ube' : 'Ube';
                        p.textContent = lang === 'zh' ? '日本知名化工公司，提供高性能塑料原料' : lang === 'en' ? 'Japanese well-known chemical company, providing high-performance plastic raw materials' : 'Công ty hóa học nổi tiếng Nhật Bản, cung cấp nguyên liệu nhựa hiệu suất cao';
                    }
                }
            });
        }
        
        // 更新新闻页面内容
        const newsList = document.querySelector('.news-list');
        if (newsList && window.location.pathname.includes('news.html')) {
            const h2 = newsList.querySelector('h2');
            if (h2) {
                h2.textContent = lang === 'zh' ? '新聞列表' : lang === 'en' ? 'News List' : 'Danh Sách Tin Tức';
            }
        }
    }
};

