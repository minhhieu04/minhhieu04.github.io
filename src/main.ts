import './style.css';
import './privacy-layout.css';

type Language = 'en' | 'vi';
const vi: Record<string, string> = {
  toolkitTitle:'Công cụ mình sử dụng',toolkitIntro:'Từ giao diện, xử lý nghiệp vụ đến triển khai — những công cụ mình dùng và tiếp tục học hỏi.',
  toolkitBuild:'Phát triển',toolkitData:'Dữ liệu',toolkitDataNote:'MongoDB: có kiến thức nền tảng.',
  toolkitDelivery:'Chạy & triển khai',toolkitDeliveryNote:'Quen với quy trình triển khai Kubernetes và Jenkins; có kiến thức nền về Nginx.',
  toolkitSystems:'Kết nối hệ thống',toolkitSystemsNote:'Kiến thức nền về microservices, phân chia dịch vụ, tác vụ nền và tích hợp API. Có hiểu biết về quy trình trao đổi tệp qua SFTP.',
  skip:'Đến nội dung chính',navWork:'Dự án',navAbout:'Giới thiệu',navContact:'Liên hệ',
  heroOne:'Từ ý tưởng',heroTwo:'đến điều có ích.',
  heroIntro:'Mình là Hieu Tran, lập trình viên full-stack tại Đà Nẵng. Mình tham gia phát triển giao diện, backend và tích hợp hệ thống cho phần mềm quản lý doanh nghiệp và ứng dụng dành cho khách hàng.',
  explore:'Khám phá dự án',resume:'Xem CV',portraitCaption:'Một chút tò mò, nhiều điều để khám phá.',
  capabilityOne:'Sản phẩm số',capabilityTwo:'AI & tự động hóa',capabilityThree:'Giải quyết vấn đề thực tế',
  selectedWork:'Nhiều lĩnh vực.',workEmphasis:'Cùng sự tò mò.',workSubtitle:'Học tập, cộng đồng, vận hành — một số sản phẩm mình đã góp phần xây dựng.',
  signSummary:'Đưa ngôn ngữ ký hiệu Việt Nam đến gần hơn.',personal:'Khám phá cá nhân',professional:'Đóng góp trong đội ngũ',
  caseStudy:'Xem chi tiết',enterpriseTitle:'Nền tảng quản trị ERP',enterpriseLine:'Kết nối hành chính, nhân sự, hoạt động và tài chính trên cùng nền tảng.',enterpriseKind:'Đóng góp cả frontend & backend',enterpriseArtCaption:'Minh họa ý tưởng · không mô phỏng hệ thống khách hàng.',customerTitle:'Ứng dụng dịch vụ cư dân',customerLine:'Kết nối người mua nhà, cư dân và chủ đầu tư.',customerIntro:'Theo dõi thanh toán, đặt lịch nhận nhà, cập nhật thông tin và gửi yêu cầu hỗ trợ.',customerReleased:'Đóng góp trong đội ngũ',operationsTitle:'Quản lý kiểm tra & bàn giao',operationsLine:'Ghi nhận vấn đề, theo dõi xử lý và tổng hợp báo cáo',aienLine:'Nền tảng học tập có AI hỗ trợ',
  teamNote:'Đóng góp trong đội ngũ, phạm vi rõ ràng.',privacyNote:'Dự án khách hàng được ẩn danh và chỉ mô tả ở mức tổng quan.',
  aboutTitle:'Một chút về mình',aboutHeadingOne:'Luôn muốn hiểu.',aboutHeadingTwo:'Luôn muốn làm.',
  aboutBodyOne:'Mình thích tìm hiểu cách mọi thứ vận hành — và làm cho chúng tốt hơn. Kinh nghiệm của mình trải từ phần mềm, quy trình công việc đến những thử nghiệm cá nhân về học tập và khả năng tiếp cận.',
  aboutBodyTwo:'Mình sẵn sàng cho nhiều vai trò và ngành nghề, nơi sự ham học, giao tiếp rõ ràng và khả năng giải quyết vấn đề thực tế có ích. Công nghệ là một công cụ mình mang theo, không phải giới hạn cho công việc mình có thể làm.',
  understandTitle:'Thấu hiểu',understandBody:'Bắt đầu từ con người và vấn đề thật.',makeTitle:'Thực hiện',makeBody:'Biến ý tưởng thành điều có thể trải nghiệm.',improveTitle:'Cải thiện',improveBody:'Kiểm tra, lắng nghe và làm tốt hơn.',
  experienceLabel:'Kinh nghiệm',experienceDetail:'Backend Developer · Tháng 2/2024 — Hiện tại',educationLabel:'Học vấn',educationDetail:'Công nghệ thông tin · 2019 — 2023',
  contactOne:'Việc tốt bắt đầu',contactTwo:'từ một cuộc trò chuyện.',contactBody:'Sẵn sàng cho công việc, dự án và một hướng đi mới.',getInTouch:'Kết nối với mình',copyEmail:'Sao chép email',footerLine:'Đà Nẵng, Việt Nam'
};
const elements = [...document.querySelectorAll<HTMLElement>('[data-i18n]')];
const en = Object.fromEntries(elements.map(el => [el.dataset.i18n!, el.textContent ?? '']));

interface Project {
  title: string;
  type: [string, string];
  lede: [string, string];
  context: [string, string];
  contribution: [string, string];
  architecture?: [string, string];
  flow?: string[];
  stack?: string;
  limit: [string, string];
  source?: string;

}
const projects: Record<string, Project> = {
  signbridge:{
    title:'SignBridge',type:['Personal project · In development','Dự án cá nhân · Đang phát triển'],
    lede:['Making Vietnamese Sign Language more approachable, one useful learning interaction at a time.','Đưa ngôn ngữ ký hiệu Việt Nam đến gần hơn, qua từng trải nghiệm học tập thiết thực.'],
    context:['A learning-first web application with lessons, a dictionary, quizzes and review tools. It also provides a controlled space to explore camera-based sign recognition.','Ứng dụng web ưu tiên việc học với bài học, từ điển, câu hỏi và ôn tập. Sản phẩm cũng tạo không gian thử nghiệm nhận diện ký hiệu qua camera với phạm vi có kiểm soát.'],
    contribution:['I build and iterate on the React/TypeScript learning experience, connect local AI service interfaces, and work on collection and curation flows with consent and provenance checks.','Mình phát triển và cải thiện trải nghiệm React/TypeScript, kết nối giao diện dịch vụ AI local, xây luồng thu thập và duyệt dữ liệu có kiểm tra đồng ý và nguồn gốc.'],
    architecture:['The browser handles learning, review and local collection. MediaPipe supports the scoped camera demo; a FastAPI gateway and ONNX runtime adapters provide extension points for recognition experiments.','Trình duyệt xử lý học tập, ôn tập và thu thập local. MediaPipe phục vụ demo camera giới hạn; FastAPI gateway và adapter ONNX tạo điểm mở rộng cho thử nghiệm nhận diện.'],
    flow:['React learning UI','Local collection & review','Scoped AI adapters'],stack:'React · TypeScript · Vite · FastAPI · MediaPipe · ONNX',
    limit:['Status: working learning UI and experimental recognition. This is not a validated continuous VSL translator. Model quality, licensed data and real-world evaluation remain active work.','Hiện trạng: giao diện học tập hoạt động, nhận diện ở mức thử nghiệm. Đây chưa phải hệ thống dịch VSL liên tục đã được kiểm chứng. Chất lượng mô hình, quyền dữ liệu và đánh giá thực tế vẫn đang được phát triển.'],source:'https://github.com/minhhieu04/sign-bridge'
  },
  enterprise:{title:'Business management ERP',type:['Team contribution · Frontend & backend','Đóng góp trong đội ngũ · Frontend & backend'],
    lede:['A modular platform for coordinating an organization’s daily operations.','Nền tảng quản trị dạng module, kết nối các hoạt động hằng ngày của tổ chức.'],
    context:['An ERP that brings administration, HR, activity tracking, quality and finance into one workspace, helping teams coordinate work and manage shared information. This is product context, not a claim that I built every module.','Phần mềm ERP tập trung quản lý hành chính, nhân sự, theo dõi hoạt động, chất lượng và tài chính, giúp các bộ phận phối hợp công việc và sử dụng thông tin chung. Đây là bối cảnh sản phẩm, không phải tuyên bố mình phát triển toàn bộ các module.'],
    contribution:['I contribute to both frontend and backend: implementing interfaces, connecting APIs, handling business logic and improving responsive behavior. I clarify requirements with the team and test the affected user journeys.','Mình tham gia cả frontend và backend: xây dựng giao diện, kết nối API, xử lý nghiệp vụ và cải thiện hiển thị trên nhiều thiết bị. Mình làm rõ yêu cầu cùng đội ngũ và kiểm tra các luồng người dùng liên quan.'],
    limit:['An anonymized account of my contribution to a team product. Internal implementation, client records and proprietary source are omitted.','Mô tả ẩn danh về phần đóng góp của mình trong sản phẩm đội ngũ. Không công bố cách triển khai nội bộ, dữ liệu khách hàng hoặc mã nguồn độc quyền.']},
  customer:{title:'Resident services app',type:['Team contribution · Backend development','Đóng góp trong đội ngũ · Phát triển backend'],
    lede:['Connecting homebuyers, residents and the property developer.','Kết nối người mua nhà, cư dân và chủ đầu tư.'],
    context:['A resident-services application for payment tracking, home-handover appointments, news and support requests. It brings common interactions with the property developer into one place.','Ứng dụng dịch vụ cư dân hỗ trợ theo dõi thanh toán, đặt lịch nhận bàn giao nhà, cập nhật tin tức và gửi yêu cầu hỗ trợ. Các tương tác thường gặp với chủ đầu tư được tập trung trên cùng ứng dụng.'],
    contribution:['I contribute to backend features, notifications, API integration and maintenance. I investigate reported issues, clarify expected behavior and verify changes with the team before release.','Mình đóng góp vào các tính năng backend, thông báo, tích hợp API và bảo trì. Mình tìm nguyên nhân vấn đề, làm rõ hành vi mong đợi và kiểm tra thay đổi cùng đội ngũ trước khi phát hành.'],
    limit:['My role is backend development within a team; this is not a claim that I built the mobile application or the entire product.','Vai trò của mình là phát triển backend trong đội ngũ, không phải tự xây ứng dụng mobile hoặc toàn bộ sản phẩm.']},
  operations:{title:'Inspection & handover tools',type:['Team contribution · Backend development','Đóng góp trong đội ngũ · Phát triển backend'],
    lede:['Supporting property inspection, issue resolution and handover.','Hỗ trợ kiểm tra bất động sản, xử lý vấn đề và bàn giao.'],
    context:['Tools for recording inspection findings, tracking their resolution and preparing handover reports. The overview describes the business purpose without exposing client records or internal processes.','Công cụ ghi nhận vấn đề khi kiểm tra, theo dõi tiến độ xử lý và tổng hợp báo cáo bàn giao. Mô tả chỉ nêu mục đích nghiệp vụ, không công bố dữ liệu khách hàng hoặc quy trình nội bộ.'],
    contribution:['I contribute to backend maintenance, reporting and background processing. My work includes investigating issues, implementing scoped changes and checking the resulting behavior.','Mình tham gia bảo trì backend, báo cáo và xử lý tác vụ nền. Công việc gồm tìm nguyên nhân vấn đề, triển khai thay đổi có phạm vi rõ ràng và kiểm tra kết quả.'],
    limit:['A high-level description of team contributions, without internal screens, records, architecture or performance metrics.','Mô tả tổng quan về đóng góp trong đội ngũ; không bao gồm màn hình, dữ liệu, kiến trúc nội bộ hoặc số liệu hiệu năng.']},
  aien:{title:'AIEN / LazyEnglish',type:['Personal project · Foundation phase','Dự án cá nhân · Giai đoạn nền tảng'],
    lede:['Laying a deliberate foundation for an AI-assisted English-learning product.','Xây nền tảng có chủ đích cho sản phẩm học tiếng Anh có AI hỗ trợ.'],
    context:['An early-stage learning-product exploration. The current focus is service boundaries, shared UI contracts and a maintainable path from local experiments to integrated features.','Dự án khám phá sản phẩm học tập ở giai đoạn đầu. Trọng tâm hiện tại là ranh giới dịch vụ, hợp đồng UI dùng chung và hướng tích hợp dễ bảo trì từ thử nghiệm local.'],
    contribution:['I work on the foundations and delivery workflow across a Next.js interface, a Go gateway and Python services, including interface contracts, documentation and evidence-based QA.','Mình làm phần nền tảng và quy trình phát triển trên giao diện Next.js, gateway Go và dịch vụ Python, gồm hợp đồng giao tiếp, tài liệu và QA dựa trên bằng chứng.'],
    architecture:['The Next.js frontend is separated from a Go/Gin gateway and a FastAPI service foundation. Configuration and health adapters establish the seams for later AI and retrieval integration.','Frontend Next.js tách khỏi gateway Go/Gin và nền tảng dịch vụ FastAPI. Cấu hình và adapter health tạo điểm nối cho tích hợp AI và truy xuất dữ liệu sau này.'],
    flow:['Next.js interface','Go / Gin gateway','FastAPI service foundation'],stack:'Next.js · React · TypeScript · Go · Gin · Python · FastAPI',
    limit:['In progress. These are service and UI foundations, not a claim of production-ready adaptive learning or a completed RAG system. Source remains private.','Đang phát triển. Đây là nền tảng dịch vụ và UI, chưa phải sản phẩm học thích ứng sẵn sàng production hoặc hệ thống RAG hoàn chỉnh. Source vẫn được giữ riêng tư.']}
};
let language: Language = 'en';
try { if (localStorage.getItem('hieu-language') === 'vi') language = 'vi'; } catch { /* Storage is optional. */ }
const dialog = document.querySelector<HTMLDialogElement>('#project-dialog')!;
const dialogContent = document.querySelector<HTMLDivElement>('#dialog-content')!;
let activeProject: string | undefined;
let returnFocus: HTMLElement | null = null;
let previousHash = '#work';
let openedByClick = false;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]!));
const t = (value: [string, string]) => value[language === 'en' ? 0 : 1];
function renderProject(id: string) {
  const project = projects[id];
  document.querySelector('#dialog-label')!.textContent = t(project.type);
  const labels = language === 'en' ? ['The product','My contribution','Technical details','Explore source'] : ['Sản phẩm','Đóng góp của mình','Chi tiết kỹ thuật','Xem source'];
  const technical = project.architecture ? `<details class="technical-details"><summary>${labels[2]}</summary><p>${escapeHtml(t(project.architecture))}</p><ol class="architecture">${(project.flow ?? []).map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ol><p class="dialog-tech">${escapeHtml(project.stack ?? '')}</p></details>` : '';
  dialogContent.innerHTML = `<h2 id="dialog-title">${escapeHtml(language === 'vi' ? (vi[`${id}Title`] ?? project.title) : project.title)}</h2><p class="dialog-lede">${escapeHtml(t(project.lede))}</p>${[project.context,project.contribution].map((section,index)=>`<section class="dialog-section"><h3>${labels[index]}</h3><p>${escapeHtml(t(section))}</p></section>`).join('')}${technical}<p class="dialog-limit">${escapeHtml(t(project.limit))}</p>${project.source ? `<div class="dialog-footer"><a class="text-link" href="${project.source}" target="_blank" rel="noopener noreferrer">${labels[3]} <svg class="arrow" aria-hidden="true"><use href="#icon-arrow" /></svg></a></div>` : ''}`;
}
function updateLanguage(next: Language) {
  language = next;
  document.documentElement.lang = next;
  elements.forEach(el => { const key=el.dataset.i18n!; el.textContent = (next === 'vi' ? vi[key] : en[key]) ?? en[key]; });
  document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === next)));
  document.querySelector('.close-dialog')!.setAttribute('aria-label', next === 'en' ? 'Close project details' : 'Đóng chi tiết dự án');
  document.querySelector('nav')!.setAttribute('aria-label',next === 'en' ? 'Main navigation' : 'Điều hướng chính');
  document.querySelector('.project-image')!.setAttribute('aria-label',next === 'en' ? 'Read the SignBridge case study' : 'Xem chi tiết dự án SignBridge');
  document.querySelector('.portrait img')!.setAttribute('alt',next === 'en' ? 'Hieu Tran standing on stone steps in front of a historic building' : 'Hieu Tran đứng trên bậc đá trước một tòa nhà cổ');
  document.querySelector('.project-image img')!.setAttribute('alt',next === 'en' ? 'SignBridge learning interface showing Vietnamese sign-language lesson categories' : 'Giao diện SignBridge với các nhóm bài học ngôn ngữ ký hiệu Việt Nam');
  document.querySelector('.enterprise-art img')!.setAttribute('alt',next === 'en' ? 'An idea, an interface and supporting services' : 'Minh họa ý tưởng, giao diện và phần xử lý hỗ trợ');
  document.querySelector('.about-art')!.setAttribute('alt',next === 'en' ? 'An idea sketch, an interface and the services behind it' : 'Minh họa từ phác thảo ý tưởng đến giao diện và phần xử lý phía sau');
  document.title = next === 'en' ? 'Hieu Tran — Full-stack Developer' : 'Hieu Tran — Lập trình viên Full-stack';
  document.querySelector('#copy-status')!.textContent = '';
  if (activeProject) renderProject(activeProject);
  try { localStorage.setItem('hieu-language',next); } catch { /* Storage is optional. */ }
}
document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach(button => button.addEventListener('click',()=>updateLanguage(button.dataset.lang as Language)));
function syncProject() {
  const id = location.hash.startsWith('#project-') ? location.hash.slice(9) : '';
  if (!projects[id]) { if(dialog.open) dialog.close(); activeProject=undefined; return; }
  activeProject=id;
  renderProject(id);
  if(!dialog.open) { dialog.showModal(); document.body.style.overflow='hidden'; }
  dialog.scrollTop=0;
}
document.querySelectorAll<HTMLAnchorElement>('a[href^="#project-"]').forEach(link=>link.addEventListener('click',()=>{
  returnFocus=link;previousHash=location.hash || '#work';openedByClick=true;
  if(location.hash === link.hash) syncProject();
}));
function closeProject() {
  if(openedByClick) history.back();
  else { history.replaceState(null,'',`${location.pathname}${location.search}${previousHash}`); syncProject(); }
}
document.querySelector('.close-dialog')!.addEventListener('click',closeProject);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeProject();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeProject();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';activeProject=undefined;openedByClick=false;returnFocus?.focus({preventScroll:true});});
window.addEventListener('hashchange',syncProject);
document.querySelector('#copy-email')!.addEventListener('click',async()=>{
  const status=document.querySelector('#copy-status')!;
  try { await navigator.clipboard.writeText('minhhieu.tran.mcs@gmail.com');status.textContent=language==='en'?'Email copied. Say hello anytime.':'Đã sao chép. Hẹn gặp bạn trong hộp thư!'; }
  catch { status.textContent='minhhieu.tran.mcs@gmail.com'; }
});
updateLanguage(language);
syncProject();
