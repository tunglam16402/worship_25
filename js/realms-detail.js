//Get URLs starting from ? marks.
const params = new URLSearchParams(window.location.search);
//Get objecst string of params after =.
const phu = params.get("phu");

const DATA = {
  //thien phu
  thien: {
    name: "Thiên Phủ",
    title: "Mẫu Đệ Nhất Thiên Tiên",
    subTitle: "Thánh Mẫu Cửu Trùng Thiên",

    main: {
      text: "Mẫu Đệ Nhất Thiên Tiên là Thánh Mẫu Cửu Trùng ngự nơi chín tầng mây, cai quản Thiên phủ, tiên cung. Ngài là một trong bốn vị Tứ Phủ Thánh Mẫu. Mẫu Thiên Tiên luôn giữ vị trí thứ nhất trong hàng Thánh Mẫu.",
      image: "/assets/images/home/mau-thien-tien.jpg",
      imageDesc:
        "Tranh vẽ Mẫu Đệ Nhất Thiên Tiên trong trang phục thời Lê. Tác phẩm thuộc dự án Thánh Nhan bởi trang Four Palaces - Tứ Phủ.",
    },

    role: {
      text: `Mẫu Đệ Nhất Thiên Tiên là vị Thánh Mẫu đứng đầu Thiên Phủ, giữ vai trò cai quản cõi Trời trong hệ thống tín ngưỡng thờ Mẫu Việt Nam.
      Bà tượng trưng cho quyền lực tối cao của thiên giới, là đấng chủ quản sự vận hành của trời đất và trật tự vũ trụ, đồng thời là cầu nối thiêng liêng giữa con người với thế giới thần linh.
      
      <br/>

      Về lĩnh vực quản lý, Mẫu Thượng Thiên gắn liền với các hiện tượng tự nhiên như mây, gió, mưa, sấm sét, biểu trưng cho sức mạnh của trời cao chi phối đời sống con người. 
      Trong đời sống tín ngưỡng, bà được tôn thờ như đấng ban phúc, giải hạn, che chở và bảo hộ, giúp con người cầu mong bình an, may mắn và cuộc sống thuận hòa.`,
      image: "/assets/images/home/mau-thien-tien.jpg",
    },

    origin: {
      text: `
      Mẫu Đệ Nhất Thiên Tiên còn được gọi là Mẫu Thượng Thiên, danh hiệu thể hiện vị trí đứng đầu Thiên Phủ trong hệ thống thờ Mẫu Việt Nam. Trong các văn bản tín ngưỡng và nghi lễ hầu đồng, bà thường được tôn xưng với những mỹ hiệu mang ý nghĩa tôn kính như Mẫu Cửu Trùng Thiên, Đệ Nhất Khâm Sai, nhấn mạnh quyền uy tối thượng của đấng chủ quản cõi Trời.

      <br/>

      Về nguồn gốc, Mẫu Đệ Nhất Thiên Tiên không gắn chặt với một nhân vật lịch sử cụ thể mà chủ yếu bắt nguồn từ tín ngưỡng dân gian thờ trời và thờ Mẹ của người Việt cổ. Qua quá trình phát triển của Đạo Mẫu, hình tượng Mẫu Thượng Thiên được hệ thống hóa trong mô hình Tam Tòa – Tứ Phủ, trở thành biểu tượng thiêng liêng của quyền năng trời cao. Ở một số địa phương và truyền thống thờ phụng, hình tượng Mẫu Đệ Nhất đôi khi được đồng nhất hoặc liên hệ với Thánh Mẫu Liễu Hạnh, phản ánh sự dung hòa giữa yếu tố thần thoại và lịch sử trong tín ngưỡng dân gian Việt Nam.

      `,
      image: "/assets/images/home/mau-thien-tien.jpg",
    },

    festival: {
      text: `
        AL 09/01 – Tiệc Đức Vua Cha Ngọc Hoàng Thượng Đế và Cửu Thiên Huyền Nữ Công Chúa
        <br />
        AL 09/09 – Tiệc Cửu Trùng Thiên Cung Vương Mẫu và Cô Chín Giếng Sòng Sơn Linh Từ 
        <br />
        Phủ cai quản: Thiên Phủ (thiên cung). 
        Lĩnh vực: Quản lý việc ở thiên cung, chín tầng mây và lục cung. 
      `,
    },

    temple: {
      text: `
      Đền Mẫu Cửu Trùng ở Thường Tín (Hà Nội). 
      <br />
      Tượng Mẫu Cửu Trùng Thiên tại Ba Vì (Hà Nội) — tượng đồng đúc nguyên khối, đặt trên đỉnh núi, là điểm thờ tự nổi bật. 
      `,
    },

    symbol: {
      text: 
      `
        Trang phục của Thiên Phủ có đặc trưng nổi bật là màu đỏ, được xem là màu sắc tiêu biểu của Trời và dương khí. Trong thực hành hầu đồng, khi thỉnh các giá thuộc Thiên Phủ, thanh đồng thường mặc áo đỏ hoặc các sắc đỏ đậm, đỏ son, thể hiện quyền uy và địa vị cao. Trang phục của Mẫu Thiên Phủ thường là áo dài gấm hoặc lụa đỏ, được thêu các họa tiết mang tính thiên giới như rồng, mây, mặt trời, nhật nguyệt, kết hợp với khăn hoặc mũ đỏ, đôi khi là mũ bình thiên. Chất liệu và hoa văn đều hướng tới sự trang trọng, lộng lẫy nhưng không cầu kỳ quá mức, nhằm tôn lên hình ảnh bậc tối thượng.
        <br />
        Các thánh thuộc Thiên Phủ như Quan Lớn, Chầu hay các Cô, Cậu cũng mang trang phục chủ yếu là sắc đỏ, nhưng mức độ đậm nhạt có thể khác nhau tùy ngôi vị. Quan và Chầu thường mặc áo đỏ sẫm, thắt đai, tay cầm kiếm hoặc hốt, biểu trưng cho quyền hành, pháp độ và mệnh Trời. Các Cô, Cậu Thiên Phủ lại mặc áo đỏ nhạt hoặc hồng, dáng vẻ thanh thoát, nhẹ nhàng hơn, phản ánh tính chất trong sáng và linh động của các ngài ở bậc thấp hơn trong hệ thống thiên giới.
        <br />
        Về mặt biểu tượng, Thiên Phủ gắn liền với các hình ảnh mang ý nghĩa của Trời và quyền lực tối cao. Mặt trời là biểu tượng quan trọng, đại diện cho ánh sáng, sinh khí và nguồn năng lượng dương chi phối vạn vật. Rồng xuất hiện nhiều trong trang phục và đồ thờ, tượng trưng cho thiên mệnh và quyền uy của bậc tối thượng. Hình ảnh mây gợi nhắc đến cõi thiên giới, sự siêu thoát và linh thiêng. Kiếm và hốt là những biểu trưng quen thuộc, thể hiện chính pháp, trật tự và quyền phán xét của Thiên Phủ đối với trần gian.
        <br />
        Trong không gian thờ tự, Thiên Phủ thường được đặt ở vị trí cao và trang trọng nhất, phản ánh vai trò đứng đầu trong hệ thống Tam Phủ hoặc Tứ Phủ. Màu đỏ được sử dụng chủ đạo trong bài trí, từ khăn phủ, đồ thờ cho đến các chi tiết trang trí, nhằm nhấn mạnh tính dương và sự tôn nghiêm. Khi xuất hiện trong nghi lễ hầu đồng, các giá Thiên Phủ thường đi kèm âm nhạc chầu văn mang nhịp điệu chậm rãi, trang nghiêm, ít múa động tác mạnh, qua đó làm nổi bật uy quyền và sự nghiêm cẩn của cõi Trời trong tín ngưỡng Đạo Mẫu Việt Nam.
      `,
      image: `/assets/images/home/thien-phu-trang-phuc.png`
    },

    belief: {
      text: "Mẫu Đệ Nhất Thiên Tiên là nữ thần cai quản bầu trời cao nhất trong hệ thống tín ngưỡng Đạo Mẫu, tượng trưng cho quyền năng và vị thế tối cao của nữ thần đối với cõi trời trong tín ngưỡng Tứ Phủ.",
    },
  },

  //dia phu
  dia: {
    name: "Địa Phủ",
    title: "Mẫu Đệ Nhị Thượng Ngàn",
    subTitle: "Thánh Mẫu Địa Phủ",
    main: {
      text: "Mẫu Đệ Nhị Địa Tiên là một vị Thánh Mẫu trong tín ngưỡng Đạo Mẫu Tứ Phủ, đại diện cho Địa Phủ — miền đất đai nơi con người sinh sống. ",
      image: "/assets/images/home/mau-dia-tien.jpg",
      imageDesc:
        "Tranh vẽ Mẫu Đệ Nhất Thiên Tiên trong trang phục thời Lê. Tác phẩm thuộc dự án Thánh Nhan bởi trang Four Palaces - Tứ Phủ.",
    },
    role: {
      text: 
      `
        Cai quản: Địa Phủ — đất đai, đời sống con người ở trần gian. 
        <br />
        Vị trí trong Tứ Phủ: Là Thánh Mẫu thứ hai, đứng sau Mẫu Đệ Nhất Thiên Tiên trong hệ thống Tứ Phủ. 
        <br />
        Vai trò thực tế: Ngài được xem là Thánh Mẫu Thần Chủ của Đạo Mẫu, được nhiều tín đồ tôn thờ trực tiếp ở dương gian. 
      `,
      image: "/assets/images/home/mau-dia-tien.jpg",
    },

    origin: {
      text: 
      `
        Địa Phủ trong Đạo Mẫu Việt Nam hình thành từ quan niệm dân gian lâu đời về thế giới âm, cõi đất và mối liên hệ giữa người sống với linh hồn người đã khuất. Từ rất sớm, người Việt đã tin rằng bên cạnh cõi trần còn tồn tại một thế giới vô hình nằm dưới mặt đất, nơi cư ngụ của linh hồn tổ tiên, các vong linh và những lực lượng siêu nhiên có ảnh hưởng trực tiếp đến đời sống con người. Chính nền tảng tín ngưỡng thờ tổ tiên, thờ linh hồn và sự tôn kính đối với đất đai đã tạo tiền đề cho sự hình thành của Địa Phủ trong hệ thống Đạo Mẫu.
        <br />
        Khi Đạo Mẫu phát triển và được hệ thống hóa thành Tam Phủ rồi Tứ Phủ, Địa Phủ dần được xác lập như một phủ độc lập, bên cạnh Thiên Phủ, Nhạc Phủ và Thoải Phủ. Nếu Thiên Phủ tượng trưng cho Trời và quyền lực tối cao, thì Địa Phủ đại diện cho cõi âm, cho đất đai, mồ mả và sự quản lý linh hồn người chết. Địa Phủ phản ánh rõ nét quan niệm “âm dương tương thông” của người Việt, trong đó cõi âm không hoàn toàn đối lập với cõi dương mà tồn tại song song, tác động qua lại và cần được tôn kính, điều hòa.
        <br />
        Nguồn gốc của Địa Phủ còn chịu ảnh hưởng mạnh từ Phật giáo và Đạo giáo, đặc biệt là quan niệm về âm phủ, nhân quả và sự phán xét sau khi chết. Trong quá trình giao thoa văn hóa, những hình dung về địa ngục, quan tòa âm phủ, công – tội và luân hồi đã được Việt hóa, hòa trộn với tín ngưỡng bản địa để tạo nên hình ảnh Địa Phủ mang màu sắc riêng của Đạo Mẫu. Địa Phủ trong tín ngưỡng dân gian Việt Nam vì vậy không chỉ là nơi trừng phạt mà còn là không gian quản lý, phân xử và dẫn dắt linh hồn, đảm bảo trật tự giữa cõi sống và cõi chết.
      `,
    },

    festival: {
      text: 
      `
        AL 24/02: Tiệc Sòng Sơn Quốc Mẫu
        <br />
        AL 03/03: Tiệc Đức Quốc Mẫu Đệ Nhất Thiên Tiên Phủ Dày
      `,
    },

    temple: {
      text: 
      `
        Mẫu Đệ Nhị Địa Tiên được thờ tại nhiều điện thờ, đền phủ khắp miền Bắc Việt Nam, ví dụ:
        <br />
        Phủ Dày (Nam Định) — là trung tâm thờ chính.
        
        <br />
        Phủ Quảng Cung (Nam Định), Phủ Tây Hồ (Hà Nội), Đền Sòng Sơn (Hà Nội), Phủ Đồi Ngang (Ninh Bình)… 
      `,
    },

    symbol: {
      text: `
        Trang phục của Mẫu Đệ Nhị Thượng Ngàn đặc trưng bởi màu xanh lá cây, màu tượng trưng cho rừng núi, sự sinh sôi và sức sống bền bỉ của thiên nhiên. Trong nghi lễ hầu đồng, khi thỉnh giá Đệ Nhị, thanh đồng thường mặc áo dài xanh lục hoặc xanh nõn chuối, có thể pha thêm các sắc xanh đậm hoặc xanh ngọc. Chất liệu áo thường là gấm hoặc lụa, được thêu họa tiết hoa lá, chim muông, núi non, thể hiện thế giới sơn lâm mà Mẫu cai quản. Trang phục của Mẫu vừa mang vẻ uy nghi của bậc thánh mẫu, vừa phảng phất nét mềm mại, gần gũi của người mẹ rừng.
        <br />
        Các biểu tượng gắn với Đệ Nhị Thượng Ngàn chủ yếu xoay quanh hình ảnh núi rừng và tự nhiên. Cây cối, hoa lá, chim thú là những hình ảnh thường thấy trên áo mũ, đồ thờ hoặc trong diễn xướng hầu đồng, tượng trưng cho sự trù phú và che chở của rừng xanh. Đôi khi xuất hiện hình tượng hươu, nai, chim công hoặc các loài chim rừng, thể hiện sự thanh khiết, linh thiêng và vẻ đẹp của thiên nhiên. Những biểu trưng này nhấn mạnh vai trò của Mẫu như người bảo hộ núi rừng, ban phát lộc rừng, sức khỏe và sự sinh sôi cho con người.
      `,
      image: "/assets/images/home/dia-phu-trang-phuc.jpg"
    },

    belief: {
      text: "Mẫu Đệ Nhị Địa Tiên gắn với một số vị hầu như Quỳnh Hoa, Quế Hoa, Thuỵ Hoa, Mai Hoa, được tôn thờ trong vài truyền thống địa phương như Tam Toà Vân Hương Thánh Mẫu…",
    },
  },

  //thoai phu
  thoai: {
    name: "Thoải Phủ",
    title: "Mẫu Đệ Tam Thuỷ Tiên",
    subTitle: "Thánh Mẫu Thoải Phủ",
    main: {
      text: "Mẫu Đệ Tam Thuỷ Tiên là một trong bốn vị Thánh Mẫu trong tín ngưỡng Đạo Mẫu Tứ Phủ, cai quản Thuỷ Phủ — miền sông nước, biển cả và mọi thứ liên quan nước. "
    },
    role: {
      text: `Bà là Thánh Mẫu đại diện cho miền nước trong hệ thống Tứ Phủ. 
      <br />
      Trong thần điện Đạo Mẫu, tranh tượng của Mẫu Đệ Tam Thuỷ Tiên thường ngồi bên tay trái Mẫu Đệ Nhất Thiên Tiên. `,
      image: "/assets/images/home/mau-thuy-tien.jpg",
    },

    origin: {
      text: 
      `
        Thoải Phủ trong Đạo Mẫu Việt Nam có nguồn gốc từ tín ngưỡng thờ nước rất cổ xưa của cư dân nông nghiệp lúa nước. Đối với người Việt, nước không chỉ là yếu tố tự nhiên thiết yếu cho sản xuất và đời sống mà còn là một lực lượng linh thiêng, có khả năng mang lại sự sống hoặc gây ra tai ương qua lũ lụt, hạn hán. Chính sự phụ thuộc sâu sắc vào sông ngòi, ao hồ, biển cả và mưa gió đã khiến con người sớm hình thành niềm tin vào các thần linh cai quản thủy giới, từ đó đặt nền móng cho sự ra đời của Thoải Phủ trong đời sống tâm linh dân gian.
        <br />
        Ban đầu, những niềm tin này tồn tại rải rác dưới dạng thờ các thần sông, thần suối, thần biển hay các linh hồn gắn với nguồn nước cụ thể ở từng địa phương. Theo thời gian, khi tín ngưỡng thờ Mẫu phát triển và được hệ thống hóa thành Tam Phủ rồi Tứ Phủ, các yếu tố thờ nước được quy tụ lại thành một chỉnh thể thống nhất gọi là Thoải Phủ. Việc hình thành Thoải Phủ phản ánh quá trình khái quát hóa và nâng tầm các tín ngưỡng bản địa, đưa những thần linh gắn với nước vào một hệ thống vũ trụ quan hoàn chỉnh cùng với Thiên Phủ, Nhạc Phủ và Địa Phủ.
      `,
    },

    festival: {
      text: `
        AL 12/02: Tiệc Mẫu Tuyên Quang
        <br />
        AL 10/06: Tiệc Đức Quốc Mẫu Đệ Tam Thoải Cung Thác Hàn
        <br />
        AL 12/06: Tiệc Mẫu Thác Đền Hàn và Đản Nhật Cô Bơ Bông 
      `,
    },

    temple: {
      text: `
        Người ta thờ Mẫu Đệ Tam Thuỷ Tiên ở nhiều địa điểm như:
        <br />
        Đền Hạ, đền Ỷ La, đền Thượng (Tuyên Quang)
        <br />
        Đền Xâm Thị, đền Dầm, đền Ghềnh (Hà Nội)
        <br />
        Đền Mẫu Thác Hàn (Thanh Hóa)
        <br />
        Đền Mẫu Thoải (Lạng Sơn) 
      `,
      
    },
    
    symbol: {
      text: `
      Trang phục của Thoải Phủ có màu sắc chủ đạo là trắng, đôi khi pha ánh xanh nhạt hoặc bạc, tượng trưng cho nước, cho sự tinh khiết và mênh mang của sông biển. Trong nghi lễ hầu đồng, khi thỉnh các giá thuộc Thoải Phủ, thanh đồng thường mặc áo dài trắng hoặc trắng ánh bạc, chất liệu lụa mềm, nhẹ, tạo cảm giác bay bổng và trôi chảy như dòng nước. Trên áo thường thêu các họa tiết sóng nước, cá, rồng nước hoặc mây thủy khí, phản ánh không gian thủy giới mà Mẫu và các thánh thuộc Thoải Phủ cai quản.
      <br />
      Biểu tượng của Thoải Phủ gắn liền chặt chẽ với hình ảnh nước và sinh vật thủy sinh. Sóng nước là biểu trưng phổ biến nhất, thể hiện sự vận động không ngừng và sức mạnh vô hình của thủy giới. Rồng nước xuất hiện như biểu tượng của quyền uy và khả năng điều tiết mưa gió, còn cá, đặc biệt là cá chép, tượng trưng cho sự no đủ, may mắn và khả năng vượt khó. Những biểu tượng này nhấn mạnh vai trò của Thoải Phủ trong việc ban phát mưa thuận gió hòa, bảo hộ mùa màng và cuộc sống của con người.
      `,
      image: "/assets/images/home/thoai-phu-trang-phuc.jpg",
    },

    belief: {
      text: `
        Thoải Phủ trong Đạo Mẫu Việt Nam có mối liên hệ chặt chẽ với nhiều tầng lớp tín ngưỡng khác nhau trong đời sống tinh thần của người Việt, trước hết là tín ngưỡng thờ nước và thờ các lực lượng tự nhiên. Nước giữ vai trò trung tâm trong xã hội nông nghiệp lúa nước, quyết định sự sống còn của mùa màng và sinh kế, vì vậy từ rất sớm con người đã hình thành niềm tin vào các thần linh cai quản sông, suối, ao, hồ và biển cả. Thoải Phủ chính là sự kế thừa và tập hợp những niềm tin rời rạc này, đặt chúng vào một hệ thống tín ngưỡng có trật tự, giúp con người lý giải và ứng xử hài hòa với thế giới tự nhiên.
        <br />
        Bên cạnh tín ngưỡng bản địa, Thoải Phủ còn có mối liên hệ sâu sắc với Phật giáo và Đạo giáo thông qua quá trình giao thoa văn hóa kéo dài nhiều thế kỷ. Quan niệm về long vương, thủy thần, về thế giới dưới nước và khả năng điều tiết mưa gió của các linh thể đã ảnh hưởng đến cách hình dung về các thánh thuộc Thoải Phủ. Tuy nhiên, trong Đạo Mẫu, những yếu tố này được Việt hóa rõ rệt, trở nên gần gũi với đời sống dân gian hơn là mang tính giáo lý trừu tượng. Thoải Phủ vì vậy vừa mang dáng dấp của thủy giới linh thiêng trong tư tưởng Á Đông, vừa phản ánh nhu cầu thực tiễn của cộng đồng cư dân nông nghiệp.
      `,
    },
  },

  //nhac phu
  nhac: {
    name: "Nhạc Phủ",
    title: "Mẫu Đệ Tứ Khâm Sai",
    subTitle: "Thánh Mẫu Nhạc Phủ",
    main: {
      text: "Mẫu Đệ Tứ Nhạc Tiên là một trong bốn vị Thánh Mẫu trong tín ngưỡng Đạo Mẫu Tứ Phủ, cai quản Nhạc Phủ — miền rừng núi, cao nguyên và thiên nhiên hoang dã. "
    },
    role: {
      text: `
        Phủ/Quyền cai quản: Nhạc Phủ — miền núi rừng, non nước, hang động, rừng cây và trung du. 
        <br />
        Lĩnh vực chính: Quản lý thiên nhiên núi rừng và phong cảnh đại ngàn. 
        <br />
        Được xem là biểu tượng của Mẫu Thượng Ngàn — vị mẫu của núi rừng trong tín ngưỡng dân gian Việt Nam. 
      `,
      image: "/assets/images/home/mau-nhac-tien.jpg",
    },

    origin: {
      text: `
        Nhạc Phủ trong Đạo Mẫu Việt Nam có nguồn gốc từ tín ngưỡng thờ núi rừng và tự nhiên của cư dân Việt cổ, đặc biệt là những cộng đồng sinh sống ở vùng trung du và miền núi. Đối với người Việt, rừng núi không chỉ là không gian sinh tồn cung cấp gỗ, lâm sản, thú rừng mà còn là nơi ẩn chứa những lực lượng thiêng liêng, khó đoán định. Chính sự kính sợ và tôn trọng đối với núi rừng đã sớm hình thành niềm tin vào các thần linh cai quản sơn lâm, đặt nền tảng cho sự ra đời của Nhạc Phủ trong đời sống tâm linh dân gian.
        <br />
        Ban đầu, những niềm tin này tồn tại dưới dạng thờ các thần núi, thần rừng, thần cây cổ thụ hoặc các linh hồn gắn với những địa danh cụ thể. Qua thời gian, cùng với quá trình giao lưu văn hóa giữa các vùng miền, các tín ngưỡng thờ sơn lâm dần được tích hợp vào hệ thống tín ngưỡng thờ Mẫu đang hình thành. Khi Đạo Mẫu được hệ thống hóa thành Tam Phủ rồi Tứ Phủ, Nhạc Phủ được xác lập như một phủ riêng biệt, đại diện cho miền núi rừng, song hành với Thiên Phủ, Thoải Phủ và Địa Phủ, tạo nên một bức tranh vũ trụ tâm linh toàn diện.
        <br />
        Nguồn gốc của Nhạc Phủ cũng chịu ảnh hưởng từ tín ngưỡng của các cộng đồng dân tộc thiểu số sinh sống ở vùng núi, nơi rừng được xem là không gian linh thiêng gắn với tổ tiên và thần linh bảo hộ. Những quan niệm này khi hòa nhập vào văn hóa Việt đã góp phần làm phong phú thêm hình ảnh Nhạc Phủ, khiến phủ này mang sắc thái vừa dân gian vừa huyền linh. Tuy nhiên, trong quá trình tiếp biến, các yếu tố ngoại lai được Việt hóa mạnh mẽ, để Nhạc Phủ trở thành một phần không thể tách rời của hệ thống Đạo Mẫu mang bản sắc riêng.
      `,
    },

    festival: {
      text: "Ngày Mão đầu tháng 02 âm lịch được xem là ngày khánh tiệc lớn để tôn vinh Mẫu.",
    },

    temple: {
      text: `
        Người ta thờ Mẫu Đệ Tứ Nhạc Tiên (Mẫu Thượng Ngàn) ở nhiều địa điểm nổi tiếng khắp miền Bắc Việt Nam như: 
        <br />
        Đền Đông Cuông (Yên Bái)
        <br />
        Đền Công đồng Bắc Lệ, Đền Thất Khê (Lạng Sơn)
        <br />
        Đền Suối Mỡ (Bắc Giang)
        <br />
        Đền Tam Cờ (Tuyên Quang)
        <br />
        Đền Mẫu Thượng (Lào Cai – Lai Châu)
      `,
    },

    symbol: {
      text: `
        Trang phục của Nhạc Phủ có màu sắc chủ đạo là xanh lá cây, màu tượng trưng cho rừng núi và sự sống. Trong nghi lễ hầu đồng, khi thỉnh các giá thuộc Nhạc Phủ, thanh đồng thường mặc áo dài xanh lục, xanh nõn chuối hoặc xanh ngọc, tạo cảm giác mát lành và gần gũi với thiên nhiên. Chất liệu trang phục thường là gấm hoặc lụa, được thêu các họa tiết hoa lá, cỏ cây, núi non hoặc chim thú, phản ánh rõ không gian sơn lâm mà Nhạc Phủ cai quản. Trang phục vừa mang nét mềm mại, uyển chuyển, vừa giữ được sự trang nghiêm cần có trong nghi lễ tín ngưỡng.
        <br />
        Biểu tượng của Nhạc Phủ gắn liền với các hình ảnh đặc trưng của núi rừng. Cây cối và hoa lá là những biểu trưng quan trọng, thể hiện sự che chở, nuôi dưỡng và nguồn sinh lực vô tận của thiên nhiên. Chim muông và thú rừng như hươu, nai, chim công hay các loài chim rừng thường xuất hiện trong trang trí và diễn xướng, tượng trưng cho sự thanh khiết, linh thiêng và sự hài hòa giữa con người với thế giới tự nhiên. Những biểu tượng này nhấn mạnh vai trò của Nhạc Phủ như một không gian linh thiêng của rừng núi, nơi con người gửi gắm niềm tin và sự tôn kính.
      `,
      image: "/assets/images/home/nhac-phu-trang-phuc.webp",
    },

    belief: {
      text: `
        Mẫu Đệ Tứ Nhạc Tiên còn được gọi rộng hơn là Mẫu Thượng Ngàn, một hình tượng phồn thực và gắn liền với tín ngưỡng thờ núi rừng lâu đời trong văn hoá Việt. 
        <br />
        Trong hệ thống Tứ Phủ Thánh Mẫu, Mẫu Nhạc Phủ đứng bên tay phải tượng Mẫu Thiên Tiên trong thần điện, tượng trưng cho phương Tây/ miền rừng núi trong vũ trụ tâm linh. 
      `,
    },
  },
};

const data = DATA[phu];

document.getElementById("realms-detail__name").textContent = data.name;
document.getElementById("realms-detail__title").textContent = data.title;
document.getElementById("realms-detail__sub-title").textContent = data.subTitle;

document.querySelectorAll(".realms-detail__section").forEach((section) => {
  const key = section.dataset.key;
  const content = data[key];
  if (!content) return;

  const text = section.querySelector(".section-text");
  if (text) text.innerHTML = content.text;

  const img = section.querySelector(".section-image");
  if (img) {
    if (content.image) {
      img.src = content.image;
      img.alt = data.title;
    } else {
      img.remove(); 
    }}


  const imgDesc = section.querySelector(".section-image__desc");
  if (imgDesc) imgDesc.textContent = content.imageDesc;
});
