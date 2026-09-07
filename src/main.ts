import './style.css';

type Language = 'en' | 'vi';
const vi: Record<string, string> = {
  roberpWebsite:'Website chính thức',
  toolkitTitle:'Công cụ mình sử dụng',toolkitIntro:'Từ giao diện, xử lý nghiệp vụ đến triển khai — những công cụ mình dùng và tiếp tục học hỏi.',
  toolkitBuild:'Phát triển',toolkitData:'Dữ liệu',toolkitDataNote:'MongoDB: có kiến thức nền tảng.',
  toolkitDelivery:'Chạy & triển khai',toolkitDeliveryNote:'Quen với quy trình triển khai Kubernetes và Jenkins qua dự án GL; có kiến thức nền về Nginx.',
  toolkitSystems:'Kết nối hệ thống',toolkitSystemsNote:'Kiến thức nền về microservices, phân chia dịch vụ, tác vụ nền và tích hợp API. Có hiểu biết về quy trình trao đổi tệp qua SFTP.',
  skip:'Đến nội dung chính',navWork:'Dự án',navAbout:'Giới thiệu',navContact:'Liên hệ',
  heroOne:'Từ ý tưởng',heroTwo:'đến điều có ích.',
  heroIntro:'Mình là Hiếu Trần — luôn tò mò và thích làm điều mới tại Đà Nẵng. Mình kết nối con người, ý tưởng và công nghệ để công việc hằng ngày tốt hơn một chút.',
  explore:'Khám phá dự án',resume:'Xem CV',portraitCaption:'Một chút tò mò, nhiều điều để khám phá.',
  capabilityOne:'Sản phẩm số',capabilityTwo:'AI & tự động hóa',capabilityThree:'Giải quyết vấn đề thực tế',
  selectedWork:'Nhiều lĩnh vực.',workEmphasis:'Cùng sự tò mò.',workSubtitle:'Học tập, cộng đồng, vận hành — một số sản phẩm mình đã góp phần xây dựng.',
  signSummary:'Đưa ngôn ngữ ký hiệu Việt Nam đến gần hơn.',personal:'Khám phá cá nhân',professional:'Đóng góp trong đội ngũ',
  caseStudy:'Xem chi tiết',roberpLine:'ERP cho các tổ chức xã hội và chăm sóc tại Pháp — kết nối con người, nghiệp vụ và vận hành.',roberpKind:'Đóng góp cả frontend & backend',roberpArtCaption:'Giao diện minh họa · không phải ảnh chụp sản phẩm.',glLine:'Đồng hành từ ngày mua nhà đến cuộc sống hằng ngày.',glIntro:'Theo dõi thanh toán, đặt lịch nhận nhà, cập nhật tin tức và kết nối với chủ đầu tư — trên một ứng dụng của Gamuda Land.',glReleased:'Đã phát hành trên iOS & Android',glMediaCredit:'Ảnh giới thiệu chính thức từ Google Play · Gamuda Land',gdosLine:'Vận hành bất động sản & bàn giao',aienLine:'Nền tảng học tập có AI hỗ trợ',
  teamNote:'Đóng góp trong đội ngũ, phạm vi rõ ràng.',privacyNote:'Code nội bộ và dữ liệu khách hàng được giữ riêng tư.',
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
  architecture: [string, string];
  flow: string[];
  stack: string;
  limit: [string, string];
  source?: string;
  website?: string;
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
  roberp:{title:'ROBERP',type:['Team contribution · Frontend & backend · France','Đóng góp trong đội ngũ · Frontend & backend · Pháp'],
    lede:['A modular ERP for France’s social and care sector, with organization-specific workspaces.','ERP dạng module cho các tổ chức xã hội và chăm sóc tại Pháp, với không gian làm việc riêng theo từng đơn vị.'],
    context:['ROBERP is a modular ERP for social and care-sector organizations in France. Its official website presents administration, HR, activity tracking, quality, finance and governance in one platform. The application also supports planning, documents and purchasing, with organization-specific configuration, structures, users and data scope.','ROBERP là ERP dạng module dành cho các tổ chức xã hội và chăm sóc tại Pháp. Website chính thức giới thiệu các nhóm nghiệp vụ hành chính, nhân sự, theo dõi hoạt động, chất lượng, tài chính và quản trị trên cùng một nền tảng. Ứng dụng còn hỗ trợ lịch làm việc, tài liệu và mua hàng; mỗi đơn vị có cấu hình, cơ cấu tổ chức, người dùng và phạm vi dữ liệu riêng.'],
    contribution:['I work across both frontend and backend: React/Apollo interfaces, Django/GraphQL business logic, and the connection between them. My contributions include role and permission management, document-template workflows, task interactions and responsive UI improvements. I follow features from the user-facing flow through API behavior and data handling, then verify the affected paths.','Mình tham gia trực tiếp cả frontend và backend: xây dựng giao diện React/Apollo, xử lý nghiệp vụ bằng Django/GraphQL và kết nối hai phía. Những phần mình đóng góp gồm quản lý vai trò và phân quyền, quy trình mẫu tài liệu, thao tác công việc và cải thiện giao diện responsive. Mình theo sát tính năng từ luồng người dùng đến API, xử lý dữ liệu và kiểm tra lại các tình huống liên quan.'],
    architecture:['The React client uses Apollo to communicate with a Django/Graphene GraphQL API. Company context determines configuration and data scope; role, organizational-structure and field-level permissions shape what each user can access. Business modules share this foundation, with Celery/Redis handling background work. Separate workspaces describe logical company boundaries, not a claim that each company has a separate database.','Giao diện React dùng Apollo để giao tiếp với API GraphQL xây bằng Django/Graphene. Ngữ cảnh công ty quyết định cấu hình và phạm vi dữ liệu; quyền theo vai trò, cơ cấu tổ chức và trường thông tin quyết định người dùng có thể xem hoặc thao tác gì. Các module nghiệp vụ dùng chung nền tảng này, còn Celery/Redis xử lý tác vụ nền. Không gian riêng ở đây là phân tách theo công ty trong ứng dụng, không có nghĩa mỗi công ty dùng một cơ sở dữ liệu riêng.'],
    flow:['React / Apollo UI','Django / GraphQL API','Company-scoped business data'],stack:'React · JavaScript / TypeScript · Apollo · Python · Django · Graphene · Celery · Redis',
    limit:['A team product. The illustration explains the company-workspace model; it is not an internal screenshot and contains no real company or customer data.','Sản phẩm của đội ngũ. Hình minh họa giải thích mô hình không gian công ty, không phải ảnh chụp hệ thống nội bộ và không chứa dữ liệu công ty hay khách hàng thật.'],website:'https://roberp.fr/'},
  gl:{title:'GL Lifestyle+',type:['Team contribution · Released on iOS & Android','Đóng góp trong đội ngũ · Đã phát hành trên iOS & Android'],
    lede:['From buying a home to everyday life, with Gamuda Land.','Đồng hành từ ngày mua nhà đến cuộc sống hằng ngày.'],
    context:['GL Lifestyle+ brings homeownership information and services into one place. Buyers and residents can follow payment schedules, arrange home handover, read project updates and send support requests to Gamuda Land. Services and features vary by market and app version.','GL Lifestyle+ giúp khách hàng và cư dân Gamuda Land theo dõi thông tin căn hộ, tiến độ thanh toán, đặt lịch nhận nhà, cập nhật tin tức và gửi yêu cầu hỗ trợ đến chủ đầu tư. Các tiện ích được triển khai theo từng thị trường và phiên bản ứng dụng.'],
    contribution:['I contribute to the product’s backend, with work on resident access and delegation, automated notifications, and fixes for day-to-day operations. I work through the business rules with the team, implement changes and test the affected flows before release.','Mình tham gia phát triển và bảo trì phần xử lý nghiệp vụ của sản phẩm, gồm phân quyền và ủy quyền cư dân, thông báo tự động và xử lý các vấn đề phát sinh khi vận hành. Công việc đi từ làm rõ yêu cầu với đội ngũ, triển khai thay đổi đến kiểm tra lại các luồng liên quan trước khi phát hành.'],
    architecture:['The mobile app and administration tools connect to NestJS APIs. Shared business modules handle the core rules; PostgreSQL stores data, while Redis queues support scheduled notifications and background processing.','Ứng dụng và trang quản trị kết nối với API viết bằng NestJS. Các module dùng chung xử lý quy tắc nghiệp vụ; PostgreSQL lưu dữ liệu, còn hàng đợi Redis hỗ trợ gửi thông báo theo lịch và các tác vụ chạy nền.'],
    flow:['App & administration','Business APIs','Data & background jobs'],stack:'Node.js · NestJS · TypeScript · Prisma · PostgreSQL · BullMQ · Redis',
    limit:['Developed as a team product. My contribution is in backend engineering; the store images show the wider product experience and belong to Gamuda.','Sản phẩm được phát triển bởi đội ngũ; vai trò của mình tập trung ở backend. Ảnh từ kho ứng dụng minh họa trải nghiệm sản phẩm và thuộc Gamuda.']},
  gdos:{title:'GDOS / Gamuda Defect',type:['Professional work · Property operations','Dự án công việc · Vận hành bất động sản'],
    lede:['Helping teams move from defect reporting to resolution and handover.','Hỗ trợ đội ngũ đi từ ghi nhận lỗi đến xử lý và bàn giao.'],
    context:['A property defect-management system with inspection, handover, reporting and integration workflows. Long-running exports need to stay separate from interactive requests.','Hệ thống quản lý lỗi bất động sản với kiểm tra, bàn giao, báo cáo và tích hợp. Các tác vụ xuất dữ liệu kéo dài cần tách khỏi yêu cầu tương tác.'],
    contribution:['I work on backend maintenance and operational workflows in this codebase, with attention to traceable state changes, reporting and reliable asynchronous processing.','Mình tham gia bảo trì backend và các quy trình vận hành, chú trọng thay đổi trạng thái có thể theo dõi, báo cáo và xử lý bất đồng bộ đáng tin cậy.'],
    architecture:['NestJS domain modules use TypeORM/MySQL for persistence. Bull/Redis consumers handle background reporting and exports, with notifications and external model integrations around the core workflows.','Module nghiệp vụ NestJS dùng TypeORM/MySQL để lưu trữ. Consumer Bull/Redis xử lý báo cáo và xuất dữ liệu nền, kết hợp thông báo và tích hợp mô hình bên ngoài.'],
    flow:['Defect & handover APIs','Domain services / MySQL','Export workers & notifications'],stack:'NestJS · TypeScript · TypeORM · MySQL · Bull · Redis',
    limit:['A high-level account of team work. No client records, internal screens or proprietary code are published here.','Giới thiệu tổng quan về đóng góp trong đội ngũ. Không công khai hồ sơ khách hàng, màn hình nội bộ hoặc mã nguồn độc quyền.']},
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
const stores = {
  google: 'https://play.google.com/store/apps/details?id=com.gamudaland.gll&hl=vi',
  apple: 'https://apps.apple.com/vn/app/gl-lifestyle/id6755452154'
};
const glScreens = [
  {file:'google-play-overview.webp',store:'Google Play',url:stores.google,caption:['Home & project updates','Thông tin căn hộ & tin tức'] as [string,string]},
  {file:'google-play-payments.webp',store:'Google Play',url:stores.google,caption:['Payment reminders','Nhắc lịch thanh toán'] as [string,string]},
  {file:'app-store-03.webp',store:'App Store',url:stores.apple,caption:['Resident services · Malaysia','Tiện ích cư dân · Malaysia'] as [string,string]}
];
function glShowcase() {
  return `<div class="store-links" aria-label="${language === 'en' ? 'Official app listings' : 'Ứng dụng trên các kho chính thức'}"><a href="${stores.google}" target="_blank" rel="noopener noreferrer">Google Play <svg class="arrow" aria-hidden="true"><use href="#icon-arrow" /></svg></a><a href="${stores.apple}" target="_blank" rel="noopener noreferrer">App Store <svg class="arrow" aria-hidden="true"><use href="#icon-arrow" /></svg></a></div><div class="store-gallery">${glScreens.map(screen=>`<figure><a href="/images/gl-lifestyle/${screen.file}" target="_blank" rel="noopener" aria-label="${language === 'en' ? 'View image: ' : 'Xem ảnh: '}${escapeHtml(t(screen.caption))}"><img src="/images/gl-lifestyle/${screen.file}" alt="${escapeHtml(t(screen.caption))} — GL Lifestyle+" width="314" height="680" /></a><figcaption>${escapeHtml(t(screen.caption))}<a href="${screen.url}" target="_blank" rel="noopener noreferrer">${screen.store}</a></figcaption></figure>`).join('')}</div><p class="media-credit">${language === 'en' ? 'Official promotional images © Gamuda. App Store imagery illustrates the Malaysia experience; available features may differ by market.' : 'Ảnh quảng bá chính thức © Gamuda. Ảnh App Store minh họa phiên bản Malaysia; tính năng có thể khác theo thị trường.'}</p>`;
}
function renderProject(id: string) {
  const project = projects[id];
  dialog.classList.toggle('product-dialog',id === 'gl');
  document.querySelector('#dialog-label')!.textContent = t(project.type);
  const labels = language === 'en' ? ['The product','My contribution','Technical details','Explore source'] : ['Sản phẩm','Đóng góp của mình','Chi tiết kỹ thuật','Xem source'];
  const projectArt = id === 'roberp' ? `<figure class="project-art"><img src="/images/roberp-product.svg" width="760" height="440" alt="${language === 'en' ? 'Conceptual ROBERP interface with company switching and weekly planning' : 'Giao diện ROBERP cách điệu với bộ chọn công ty và lịch làm việc'}" /><figcaption>${language === 'en' ? 'Interface illustration · not a product screenshot' : 'Giao diện minh họa · không phải ảnh chụp sản phẩm'}</figcaption></figure>` : '';
  dialogContent.innerHTML = `<h2 id="dialog-title">${escapeHtml(project.title)}</h2><p class="dialog-lede">${escapeHtml(t(project.lede))}</p>${project.website ? `<div class="store-links"><a href="${project.website}" target="_blank" rel="noopener noreferrer">${language === 'en' ? 'Official ROBERP website' : 'Website chính thức ROBERP'} <svg class="arrow" aria-hidden="true"><use href="#icon-arrow" /></svg></a></div>` : ''}${id === 'gl' ? glShowcase() : projectArt}${[project.context,project.contribution].map((section,index)=>`<section class="dialog-section"><h3>${labels[index]}</h3><p>${escapeHtml(t(section))}</p></section>`).join('')}<details class="technical-details"><summary>${labels[2]}</summary><p>${escapeHtml(t(project.architecture))}</p><ol class="architecture" aria-label="${language === 'en' ? 'Architecture overview' : 'Kiến trúc tổng quan'}">${project.flow.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ol><p class="dialog-tech">${escapeHtml(project.stack)}</p></details><p class="dialog-limit${id === 'gl' || id === 'roberp' ? ' team-credit' : ''}">${escapeHtml(t(project.limit))}</p>${project.source ? `<div class="dialog-footer"><a class="text-link" href="${project.source}" target="_blank" rel="noopener noreferrer">${labels[3]} <svg class="arrow" aria-hidden="true"><use href="#icon-arrow" /></svg></a></div>` : ''}`;
}
function updateLanguage(next: Language) {
  language = next;
  document.documentElement.lang = next;
  elements.forEach(el => { const key=el.dataset.i18n!; el.textContent = (next === 'vi' ? vi[key] : en[key]) ?? en[key]; });
  document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === next)));
  document.querySelector('.close-dialog')!.setAttribute('aria-label', next === 'en' ? 'Close project details' : 'Đóng chi tiết dự án');
  document.querySelector('nav')!.setAttribute('aria-label',next === 'en' ? 'Main navigation' : 'Điều hướng chính');
  document.querySelector('.project-image')!.setAttribute('aria-label',next === 'en' ? 'Read the SignBridge case study' : 'Xem chi tiết dự án SignBridge');
  document.querySelector('.portrait img')!.setAttribute('alt',next === 'en' ? 'Hiếu Trần standing on stone steps in front of a historic building' : 'Hiếu Trần đứng trên bậc đá trước một tòa nhà cổ');
  document.querySelector('.project-image img')!.setAttribute('alt',next === 'en' ? 'SignBridge learning interface showing Vietnamese sign-language lesson categories' : 'Giao diện SignBridge với các nhóm bài học ngôn ngữ ký hiệu Việt Nam');
  document.querySelector('.roberp-art img')!.setAttribute('alt',next === 'en' ? 'Conceptual ROBERP interface with company switching and weekly planning' : 'Giao diện ROBERP cách điệu với bộ chọn công ty và lịch làm việc');
  document.querySelector('.about-art')!.setAttribute('alt',next === 'en' ? 'An idea sketch, an interface and the services behind it' : 'Minh họa từ phác thảo ý tưởng đến giao diện và phần xử lý phía sau');
  document.title = next === 'en' ? 'Hiếu Trần — Ideas into useful things' : 'Hiếu Trần — Từ ý tưởng đến điều có ích';
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
