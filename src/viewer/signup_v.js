export default class {
	constructor() {
			document.title = "Signup";
	}
	async getHtml() {
		return `<main id="page_content">
		<div class="content_title">
				<h1> Hello, GreatPeoPle!</h1>
		</div>
		<div id="form_container">
				<span class="form_elem">
						<input id="name" placeholder="이름">
				</span>
				<span class="form_elem">
						<input id="email" placeholder="이메일">
				</span>
				<span class="form_elem">
						<input id="nickname" placeholder="닉네임">
				</span>
				<span class="form_elem">
						<select id="role" name="role">
								<option value="">직군을 선택해주세요</option>
								<option value="backend">백엔드</option>
								<option value="frontend">프론트엔드</option>
								<option value="fullstack">풀스택</option>
						</select>
				</span>
				<span class="form_elem">
						<select id="MBTI" name="MBTI">
								<option value="">MBTI를 선택해주세요</option>
								<option value="ENFJ">ENFJ</option>
								<option value="ENTJ">ENTJ</option>
								<option value="ENFP">ENFP</option>
								<option value="ENTP">ENTP</option>
								<option value="ESFJ">ESFJ</option>
								<option value="ESTJ">ESTJ</option>
								<option value="ESFP">ESFP</option>
								<option value="ESTP">ESTP</option>
								<option value="INFJ">INFJ</option>
								<option value="INTJ">INTJ</option>
								<option value="INFP">INFP</option>
								<option value="INTP">INTP</option>
								<option value="ISFJ">ISFJ</option>
								<option value="ISTJ">ISTJ</option>
								<option value="ISFP">ISFP</option>
								<option value="ISTP">ISTP</option>
						</select>
				</span>
				<span class="form_elem">
						<button type="submit">등록</button>
				</span>
		</div>
</main>`;
	}
}