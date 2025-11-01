import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function sendMessageToGemini(message: string): Promise<string> {
  const prompt = `Bạn là một AI ChatBot của 1 trang web, chuyên trả lời những câu hỏi về Cao trào cách mạng 1930-1931 và 1936 -1939 của Đảng Cộng sản Việt Nam giai đoạn 1930-1939. Đây là tài liệu liên quan đến nội dung của web mà bạn sẽ dựa vào để trả lời câu hỏi:

	🏛️ Cao trào cách mạng 1930-1931
	Phong trào này diễn ra ngay sau khi Đảng Cộng sản Việt Nam ra đời, trong bối cảnh cuộc khủng hoảng kinh tế 1929-1933 và chính sách khủng bố trắng của thực dân Pháp sau khởi nghĩa Yên Bái.
	Diễn biến chính:
	Tháng 1 - 4/1930: Phong trào nổ ra liên tiếp với các cuộc bãi công của công nhân ở nhiều nơi như nhà máy xi măng Hải Phòng, các đồn điền Phú Riềng, Dầu Tiếng, nhà máy dệt Nam Định, và nhà máy diêm Bến Thủy. Phong trào nông dân cũng diễn ra ở Hà Nam, Thái Bình, Nghệ An, Hà Tĩnh.
	Ngày 1/5/1930: Nhân dân kỷ niệm Ngày Quốc tế Lao động bằng các hình thức đấu tranh; riêng trong tháng 5 đã có 16 cuộc bãi công của công nhân và 34 cuộc biểu tình của nông dân.
	Tháng 6 - 8/1930: Diễn ra 121 cuộc đấu tranh, nổi bật là cuộc tổng bãi công của công nhân khu công nghiệp Bến Thủy-Vinh (8/1930).
	Tháng 9/1930: Phong trào phát triển đến đỉnh cao. Đặc biệt, cuộc biểu tình của nông dân Hưng Nguyên vào ngày 12/9/1930 đã bị máy bay Pháp ném bom, làm chết 171 người.
	Đỉnh cao (Xô viết Nghệ-Tĩnh):
	Trước sức mạnh của quần chúng, bộ máy chính quyền của đế quốc và tay sai ở nhiều nơi (thuộc Nghệ An và Hà Tĩnh) bị tan rã.
	Các tổ chức Đảng ở cơ sở đã lãnh đạo các ban chấp hành nông hội (nông dân) đứng ra quản lý mọi mặt đời sống xã hội ở nông thôn. Đây là hình thức chính quyền cách mạng sơ khai, thực hiện dân chủ với quần chúng, được gọi là "Xô viết".
	Kết thúc và Ý nghĩa:
	Cuối 1930 - Đầu 1931: Thực dân Pháp tập trung lực lượng đàn áp khốc liệt. Hàng nghìn chiến sĩ cộng sản và hàng vạn người yêu nước bị bắt, giết hoặc tù đày. Vào tháng 4/1931, toàn bộ Ban Chấp hành Trung ương Đảng bị bắt.
	Ý nghĩa: Phong trào khẳng định được năng lực lãnh đạo của Đảng. Nó mang lại niềm tin cho nông dân vào giai cấp vô sản và lòng tự tin của quần chúng vào sức mạnh của mình. Dù Xô viết Nghệ An thất bại, nhưng nó đã "có ảnh hưởng lớn" và "mở đường cho thắng lợi về sau". Đảng đã rút ra nhiều kinh nghiệm quý báu về việc kết hợp nhiệm vụ phản đế và phản phong kiến, xây dựng liên minh công nông, và kết hợp đấu tranh chính trị với đấu tranh vũ trang.

	☀️ Cao trào dân chủ 1936-1939
	Phong trào này diễn ra trong bối cảnh chủ nghĩa phát xít xuất hiện và Đại hội VII Quốc tế Cộng sản (7/1935) chủ trương lập mặt trận chống phát xít. Đặc biệt, Mặt trận Nhân dân Pháp lên cầm quyền (1936), đã ban hành một số quyền tự do dân chủ ở thuộc địa, tạo điều kiện thuận lợi cho cuộc đấu tranh.
	Chủ trương mới của Đảng:
	Tháng 7/1936: Hội nghị Ban Chấp hành Trung ương Đảng (họp tại Thượng Hải) xác định nhiệm vụ trước mắt là chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa và tay sai, đòi tự do, dân chủ, cơm áo và hòa bình.
	Mặt trận: Chủ trương thành lập "Mặt trận nhân dân phản đế rộng rãi". Đến tháng 3/1938, tên gọi được đổi thành "Mặt trận dân chủ thống nhất".
	Hình thức đấu tranh: Đảng chủ trương chuyển từ bí mật, bất hợp pháp sang các hình thức công khai, nửa công khai, hợp pháp, nửa hợp pháp, kết hợp chặt chẽ với bí mật.
	Diễn biến chính:
	Phong trào Đông Dương Đại hội: Mở đầu bằng cuộc vận động lập "Ủy ban trù bị Đông Dương đại hội" để thu thập nguyện vọng của nhân dân ("dân nguyện"). Hàng trăm "Ủy ban hành động" đã được lập khắp nơi, riêng Nam Kỳ có 600 ủy ban.
	Đón rước: Đầu năm 1937, Đảng vận động quần chúng mít tinh, biểu tình đưa "dân nguyện" nhân dịp phái viên chính phủ Pháp Gôđa và Toàn quyền mới Brêviê sang Đông Dương.
	Đấu tranh nghị trường: Đảng tham gia các cuộc vận động tranh cử vào Viện dân biểu Bắc Kỳ, Trung Kỳ và Hội đồng quản hạt Nam Kỳ (1937-1938).
	Đấu tranh báo chí: Nhiều tờ báo của Đảng và Mặt trận Dân chủ ra đời bằng cả tiếng Việt và tiếng Pháp.
	Tuyên truyền: Nhiều sách chính trị phổ thông được xuất bản, tiêu biểu là cuốn Vấn đề dân cày (1938) của Qua Ninh (Trường Chinh) và Vân Đình (Võ Nguyên Giáp).
	Tổ chức quần chúng: Thành lập Hội truyền bá quốc ngữ (phát triển mạnh từ cuối 1937).
	Kết thúc và Ý nghĩa:
	Tháng 9/1939: Chiến tranh thế giới thứ hai bùng nổ. Thực dân Pháp ở Đông Dương tăng cường đàn áp. Đảng phải rút vào hoạt động bí mật, kết thúc thời kỳ đấu tranh dân chủ.
	Ý nghĩa: Đây là một phong trào cách mạng sôi nổi, có tính quần chúng rộng rãi. Qua đó, một "đội quân chính trị quần chúng" gồm hàng triệu người đã được tập hợp, giác ngộ và rèn luyện. Uy tín và ảnh hưởng của Đảng được mở rộng. Đảng cũng tích lũy được nhiều kinh nghiệm về chỉ đạo chiến lược, xây dựng mặt trận và kết hợp các hình thức đấu tranh. Phong trào này "thực sự là một bước chuẩn bị cho thắng lợi của Cách mạng Tháng Tám sau này".
			
	Đây là câu hỏi của 1 người ghé thăm web mà bạn cần trả lời: ${message}
	Hãy trả lời dựa vào nội dung cung cấp và suy ra từ đó nếu cần. Nếu câu hỏi hoàn toàn không liên quan đến tài liệu hoặc nội dung mà bạn cần trả lời thì hãy nói "Câu hỏi của bạn không liên quan đến đề tài của trang web này, bạn có thể tìm hiểu thêm thông qua các nguồn khác như Google", nếu có chút liên quan thì nên trả lời uyển chuyển và khuyên rằng nên tìm thêm nguồn ngoài nếu muốn chắc chắn`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function sendContentToGenerateQuizGemini(): Promise<string> {
  const prompt = `Bạn là một AI tạo Quiz cho website học tập về Cao trào cách mạng 1930-1931 và 1936 -1939 của Đảng Cộng sản Việt Nam giai đoạn 1930-1939.
  Hãy tạo ra 5 câu hỏi trắc nghiệm (tiếng Việt) liên quan đến chủ đề:
  🏛️ Cao trào cách mạng 1930-1931
	Phong trào này diễn ra ngay sau khi Đảng Cộng sản Việt Nam ra đời, trong bối cảnh cuộc khủng hoảng kinh tế 1929-1933 và chính sách khủng bố trắng của thực dân Pháp sau khởi nghĩa Yên Bái.
	Diễn biến chính:
	Tháng 1 - 4/1930: Phong trào nổ ra liên tiếp với các cuộc bãi công của công nhân ở nhiều nơi như nhà máy xi măng Hải Phòng, các đồn điền Phú Riềng, Dầu Tiếng, nhà máy dệt Nam Định, và nhà máy diêm Bến Thủy. Phong trào nông dân cũng diễn ra ở Hà Nam, Thái Bình, Nghệ An, Hà Tĩnh.
	Ngày 1/5/1930: Nhân dân kỷ niệm Ngày Quốc tế Lao động bằng các hình thức đấu tranh; riêng trong tháng 5 đã có 16 cuộc bãi công của công nhân và 34 cuộc biểu tình của nông dân.
	Tháng 6 - 8/1930: Diễn ra 121 cuộc đấu tranh, nổi bật là cuộc tổng bãi công của công nhân khu công nghiệp Bến Thủy-Vinh (8/1930).
	Tháng 9/1930: Phong trào phát triển đến đỉnh cao. Đặc biệt, cuộc biểu tình của nông dân Hưng Nguyên vào ngày 12/9/1930 đã bị máy bay Pháp ném bom, làm chết 171 người.
	Đỉnh cao (Xô viết Nghệ-Tĩnh):
	Trước sức mạnh của quần chúng, bộ máy chính quyền của đế quốc và tay sai ở nhiều nơi (thuộc Nghệ An và Hà Tĩnh) bị tan rã.
	Các tổ chức Đảng ở cơ sở đã lãnh đạo các ban chấp hành nông hội (nông dân) đứng ra quản lý mọi mặt đời sống xã hội ở nông thôn. Đây là hình thức chính quyền cách mạng sơ khai, thực hiện dân chủ với quần chúng, được gọi là "Xô viết".
	Kết thúc và Ý nghĩa:
	Cuối 1930 - Đầu 1931: Thực dân Pháp tập trung lực lượng đàn áp khốc liệt. Hàng nghìn chiến sĩ cộng sản và hàng vạn người yêu nước bị bắt, giết hoặc tù đày. Vào tháng 4/1931, toàn bộ Ban Chấp hành Trung ương Đảng bị bắt.
	Ý nghĩa: Phong trào khẳng định được năng lực lãnh đạo của Đảng. Nó mang lại niềm tin cho nông dân vào giai cấp vô sản và lòng tự tin của quần chúng vào sức mạnh của mình. Dù Xô viết Nghệ An thất bại, nhưng nó đã "có ảnh hưởng lớn" và "mở đường cho thắng lợi về sau". Đảng đã rút ra nhiều kinh nghiệm quý báu về việc kết hợp nhiệm vụ phản đế và phản phong kiến, xây dựng liên minh công nông, và kết hợp đấu tranh chính trị với đấu tranh vũ trang.

	☀️ Cao trào dân chủ 1936-1939
	Phong trào này diễn ra trong bối cảnh chủ nghĩa phát xít xuất hiện và Đại hội VII Quốc tế Cộng sản (7/1935) chủ trương lập mặt trận chống phát xít. Đặc biệt, Mặt trận Nhân dân Pháp lên cầm quyền (1936), đã ban hành một số quyền tự do dân chủ ở thuộc địa, tạo điều kiện thuận lợi cho cuộc đấu tranh.
	Chủ trương mới của Đảng:
	Tháng 7/1936: Hội nghị Ban Chấp hành Trung ương Đảng (họp tại Thượng Hải) xác định nhiệm vụ trước mắt là chống phát xít, chống chiến tranh đế quốc, chống phản động thuộc địa và tay sai, đòi tự do, dân chủ, cơm áo và hòa bình.
	Mặt trận: Chủ trương thành lập "Mặt trận nhân dân phản đế rộng rãi". Đến tháng 3/1938, tên gọi được đổi thành "Mặt trận dân chủ thống nhất".
	Hình thức đấu tranh: Đảng chủ trương chuyển từ bí mật, bất hợp pháp sang các hình thức công khai, nửa công khai, hợp pháp, nửa hợp pháp, kết hợp chặt chẽ với bí mật.
	Diễn biến chính:
	Phong trào Đông Dương Đại hội: Mở đầu bằng cuộc vận động lập "Ủy ban trù bị Đông Dương đại hội" để thu thập nguyện vọng của nhân dân ("dân nguyện"). Hàng trăm "Ủy ban hành động" đã được lập khắp nơi, riêng Nam Kỳ có 600 ủy ban.
	Đón rước: Đầu năm 1937, Đảng vận động quần chúng mít tinh, biểu tình đưa "dân nguyện" nhân dịp phái viên chính phủ Pháp Gôđa và Toàn quyền mới Brêviê sang Đông Dương.
	Đấu tranh nghị trường: Đảng tham gia các cuộc vận động tranh cử vào Viện dân biểu Bắc Kỳ, Trung Kỳ và Hội đồng quản hạt Nam Kỳ (1937-1938).
	Đấu tranh báo chí: Nhiều tờ báo của Đảng và Mặt trận Dân chủ ra đời bằng cả tiếng Việt và tiếng Pháp.
	Tuyên truyền: Nhiều sách chính trị phổ thông được xuất bản, tiêu biểu là cuốn Vấn đề dân cày (1938) của Qua Ninh (Trường Chinh) và Vân Đình (Võ Nguyên Giáp).
	Tổ chức quần chúng: Thành lập Hội truyền bá quốc ngữ (phát triển mạnh từ cuối 1937).
	Kết thúc và Ý nghĩa:
	Tháng 9/1939: Chiến tranh thế giới thứ hai bùng nổ. Thực dân Pháp ở Đông Dương tăng cường đàn áp. Đảng phải rút vào hoạt động bí mật, kết thúc thời kỳ đấu tranh dân chủ.
	Ý nghĩa: Đây là một phong trào cách mạng sôi nổi, có tính quần chúng rộng rãi. Qua đó, một "đội quân chính trị quần chúng" gồm hàng triệu người đã được tập hợp, giác ngộ và rèn luyện. Uy tín và ảnh hưởng của Đảng được mở rộng. Đảng cũng tích lũy được nhiều kinh nghiệm về chỉ đạo chiến lược, xây dựng mặt trận và kết hợp các hình thức đấu tranh. Phong trào này "thực sự là một bước chuẩn bị cho thắng lợi của Cách mạng Tháng Tám sau này".
			
  ⚠️ Yêu cầu:
  - Trả về kết quả duy nhất ở dạng JSON, không có bất kỳ giải thích hay mô tả nào bên ngoài.
  - Mỗi phần tử trong mảng JSON gồm:
	{
	  "question": "Câu hỏi ...",
	  "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
	  "answer": "A"
	}
  - Đáp án chỉ ghi ký tự "A", "B", "C", hoặc "D" tương ứng với lựa chọn đúng.
  
  Bắt đầu trả về ngay JSON của 5 câu hỏi.`;

  const result = await model.generateContent(prompt);
  return cleanGeminiJsonResponse(result.response.text());
}
export function cleanGeminiJsonResponse(response: string): string {
  // Cắt khoảng trắng đầu cuối
  let cleaned = response.trim();

  // Nếu có bọc trong ```json ... ``` thì loại bỏ
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```[a-zA-Z]*\n?/, ""); // bỏ ```json hoặc ```
    cleaned = cleaned.replace(/```$/, ""); // bỏ ```
  }

  // Cắt tiếp khoảng trắng dư thừa
  return cleaned.trim();
}
