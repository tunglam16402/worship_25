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
      text: "Nội dung ngày khánh tiệc...",
    },

    temple: {
      text: "Nội dung đền thờ và nơi tôn kính...",
    },

    symbol: {
      text: "Trang phục và biểu tượng...",
    },

    belief: {
      text: "Mối liên hệ tín ngưỡng...",
    },
  },

  //dia phu
  dia: {
    name: "Địa Phủ",
    title: "Mẫu Đệ Nhị Thượng Ngàn",
    subTitle: "Thánh Mẫu Địa Phủ",
    role: {
      text: `Mẫu Đệ Nhất Thiên Tiên là vị Thánh Mẫu đứng đầu Thiên Phủ...`,
      image: "/assets/images/home/mau-dia-tien.jpg",
    },

    origin: {
      text: "Nội dung danh hiệu và nguồn gốc...",
    },

    festival: {
      text: "Nội dung ngày khánh tiệc...",
    },

    temple: {
      text: "Nội dung đền thờ và nơi tôn kính...",
    },

    symbol: {
      text: "Trang phục và biểu tượng...",
    },

    belief: {
      text: "Mối liên hệ tín ngưỡng...",
    },
  },

  //thoai phu
  thoai: {
    name: "Thoải Phủ",
    title: "Mẫu Đệ Tam Thuỷ Tiên",
    subTitle: "Thánh Mẫu Thoải Phủ",
    role: {
      text: `Mẫu Đệ Nhất Thiên Tiên là vị Thánh Mẫu đứng đầu Thiên Phủ...`,
      image: "/assets/images/home/mau-thoai-tien.jpg",
    },

    origin: {
      text: "Nội dung danh hiệu và nguồn gốc...",
    },

    festival: {
      text: "Nội dung ngày khánh tiệc...",
    },

    temple: {
      text: "Nội dung đền thờ và nơi tôn kính...",
    },

    symbol: {
      text: "Trang phục và biểu tượng...",
    },

    belief: {
      text: "Mối liên hệ tín ngưỡng...",
    },
  },

  //nhac phu
  nhac: {
    name: "Nhạc Phủ",
    title: "Mẫu Đệ Tứ Khâm Sai",
    subTitle: "Thánh Mẫu Nhạc Phủ",
    role: {
      text: `Mẫu Đệ Nhất Thiên Tiên là vị Thánh Mẫu đứng đầu Thiên Phủ...`,
      image: "/assets/images/home/mau-nhac-tien.jpg",
    },

    origin: {
      text: "Nội dung danh hiệu và nguồn gốc...",
    },

    festival: {
      text: "Nội dung ngày khánh tiệc...",
    },

    temple: {
      text: "Nội dung đền thờ và nơi tôn kính...",
    },

    symbol: {
      text: "Trang phục và biểu tượng...",
    },

    belief: {
      text: "Mối liên hệ tín ngưỡng...",
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
  if (img && content.image) {
    img.src = content.image;
    img.alt = data.title;
  }

  const imgDesc = section.querySelector(".section-image__desc");
  if (imgDesc) imgDesc.textContent = content.imageDesc;
});
