import { okAsync, type ResultAsync } from 'neverthrow'

import type { IWorkExperienceRepository } from '../../../domain/models/resume/iWorkExperienceRepository'
import type { WorkExperience } from '../../../domain/models/resume/workExperience'

const workExperiences: WorkExperience[] = [
  {
    company: '株式会社クロスネット',
    employeeSize: 20,
    tenure: '1997年6月～2008年1月',
    employment: 'アルバイト→正社員',
    projects: [
      {
        title: '会員・宿泊予約・物販管理社内システム(1)構築および保守',
        termFrom: 2000,
        termTo: 2008,
        teamSize: 2,
        roles: ['メンバー'],
        responsibilities: `\
- 社内向けクライアント/サーバ型システムの実装
- サーバ設置(オンプレミス)
- 各クライアントPCへのデプロイ`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Windows Server', 'Windows'] },
          { genre: '言語・フレームワーク', stacks: ['Oracle DeveloperR6(PL/SQL)'] },
          { genre: 'データベース', stacks: ['Oracle 8i'] },
        ],
      },
      {
        title: '会員向け物販サイト構築および保守',
        termFrom: 2006,
        termTo: 2012,
        teamSize: 2,
        roles: ['メンバー'],
        responsibilities: `\
(1)システムの会員情報を参照する会員制のECサイト

- フレームワークなどの技術選定と実装
- サーバ設置(オンプレミス)`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['RedHat Linux', 'Windows Server'] },
          { genre: '言語・フレームワーク', stacks: ['Zope(Python)', 'PL/SQL'] },
          { genre: 'データベース', stacks: ['Oracle 8i'] },
        ],
      },
      {
        title: '会員・受発注管理社内システム構築および保守',
        termFrom: 2006,
        termTo: 2017,
        teamSize: 2,
        roles: ['メンバー'],
        responsibilities: `\
- 社内向けクライアント/サーバ型システムの詳細設計と実装
- サーバ設置(オンプレミス)
- 各クライアントPCへのデプロイ`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Windows Server', 'Windows'] },
          { genre: '言語・フレームワーク', stacks: ['Oracle DeveloperR6(PL/SQL)'] },
          { genre: 'データベース', stacks: ['Oracle 8i'] },
        ],
      },
    ],
  },
  {
    company: '株式会社システムズノエル',
    employeeSize: 1,
    tenure: '2008年2月～在籍中',
    employment: 'アルバイト→正社員',
    projects: [
      {
        title: 'クーポンサイト(B2C)保守・追加開発',
        termFrom: 2009,
        termTo: 2014,
        teamSize: 2,
        roles: ['メンバー'],
        responsibilities: `\
他社開発のクーポンサイトの保守を引き継ぎ、追加開発を客先常駐にて行う

- 要件定義、設計、実装
- 既存サーバへのデプロイ(オンプレミス)`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['RedHat Linux', 'Windows Server'] },
          { genre: '言語・フレームワーク', stacks: ['Rails(Ruby)'] },
          { genre: 'データベース', stacks: ['Oracle 9i'] },
        ],
      },
      {
        title: '相場表掲示サイト(B2B)構築および保守',
        termFrom: 2012,
        termTo: 2015,
        teamSize: 2,
        roles: ['メンバー'],
        responsibilities: `\
Webサイトの一部をWebアプリに転換し、毎日値が変わる相場表の入力を省略化するWebアプリを構築

- 技術選定、設計、実装
- サーバ設置(VPS)`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['CentOS'] },
          { genre: '言語・フレームワーク', stacks: ['Pyramid(Python)'] },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
      {
        title: 'Webクローラと記事管理、検索の社内システム構築および保守',
        termFrom: 2013,
        termTo: null,
        teamSize: 3,
        roles: ['メンバー'],
        responsibilities: `\
毎日Webサイトを巡回し記事を保存するクローラと、ため込んだ記事を検索するWebアプリ

- 他社が用意した開発環境、本番環境の引き継ぎ
- Webアプリの設計、実装
- サーバ設置(VPS)
- 保守の一環としてパフォーマンス統計を毎週報告するSlack Botを作成`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Ubuntu Linux', 'Docker', 'IBM SoftLayer'] },
          { genre: '言語・フレームワーク', stacks: ['Scrapy', 'Django(Python)'] },
          { genre: 'データベース', stacks: ['MariaDB', 'Apache Solr', 'Redis'] },
        ],
      },
      {
        title: '健康管理アプリバックエンド開発および他システムの保守',
        termFrom: 2015,
        termTo: 2016,
        teamSize: 3,
        roles: ['メンバー'],
        responsibilities: `\
スマートフォンアプリのバックエンド開発と客先常駐での保守

- 追加改修の実装
- 既存サーバへのデプロイ(オンプレミス)

後に客先の別システムの保守作業まで任され、実質SESになる

- データベースのデータ整備
- 日次作業(データファイルの送受信など)`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Windows Server'] },
          { genre: '言語・フレームワーク', stacks: ['Django(Python)'] },
          { genre: 'データベース', stacks: ['Microsoft SQL Server'] },
        ],
      },
      {
        title: 'レジシステム(2)保守および追加開発',
        termFrom: 2018,
        termTo: 2020,
        teamSize: 4,
        roles: ['メンバー'],
        responsibilities: `\
既存のWebアプリベースのレジシステムと自動釣銭機の連携部分を客先常駐で改修

- 同Webアプリの追加開発(実装のみ)
- インフラ周り(クラウド)の保守
- 開発環境の更新(Mercurial→Git移行など)`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['MacOS', '自動釣銭機', 'GCP'] },
          { genre: '言語・フレームワーク', stacks: ['PHP', 'jQuery(JavaScript)'] },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
      {
        title: '洋服系ECサイト(B2C)バックエンド開発',
        termFrom: 2018,
        termTo: 2019,
        teamSize: 4,
        roles: ['メンバー', 'メンター'],
        responsibilities: `\
(2)のシステムを作っている会社に常駐して受託開発

- バックエンド部分の技術選定、開発環境構築、詳細設計、実装
- 本番環境(VPS)およびデプロイ体制の構築
- 他の開発者への教育・指導`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Ubuntu Linux', 'Docker', 'AWS'] },
          { genre: '言語・フレームワーク', stacks: ['Django REST Framework(Python)'] },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
      {
        title: '映像資産管理サイトバックエンド開発/インフラ構築',
        termFrom: 2019,
        termTo: 2020,
        teamSize: 4,
        roles: ['メンバー', 'メンター'],
        responsibilities: `\
(2)のシステムを作っている会社に常駐して受託開発

動画・静止画などのリソースを招待制で限定公開するWebアプリ

- 動画・静止画コンテンツをAWSへ移行
- 開発環境の構築
- バックエンドの詳細設計、実装
- 本番環境構築(AWS)、GitHub Actionsを用いたCI環境の構築
- 他の開発者への教育・指導`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Ubuntu Linux', 'Docker', 'AWS'] },
          { genre: '言語・フレームワーク', stacks: ['Django REST Framework(Python)'] },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
      {
        title: '葬儀系ECサイト(B2C)バックエンド開発',
        termFrom: 2020,
        termTo: 2021,
        teamSize: 3,
        roles: ['メンバー', 'メンター'],
        responsibilities: `\
(2)のシステムを作っている会社に常駐して受託開発

- 開発環境の構築
- バックエンドの詳細設計、実装
- 本番環境構築(AWS)、GitHub Actionsを用いたCI環境の構築
- 他の開発者への教育・指導`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Ubuntu Linux', 'Docker', 'AWS'] },
          { genre: '言語・フレームワーク', stacks: ['Django REST Framework(Python)'] },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
      {
        title: '印税分配権売買サイト開発',
        termFrom: 2021,
        termTo: 2024,
        teamSize: 6,
        roles: ['メンバー'],
        responsibilities: `\
印税分配権の売買(B2C、C2C)や、権利所有者への印税分配管理をするWebアプリ

- 他社が用意した開発環境、本番環境の引き継ぎ
- ドメイン駆動設計やスクラム開発の希望を受け、学習しながら導入
- SSTを用いたバックエンドとインフラの設計、実装、構築
- Nuxt.jsを用いたフロントエンドの実装
- フロントエンドをSvelteKitで書き換え、バックエンド/インフラのGitリポジトリ(monorepo)に統合
- 週1回打ち合わせの進行、各人のタスク進捗管理`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['AWS'] },
          {
            genre: '言語・フレームワーク',
            stacks: ['TypeScript', 'SST(旧Serverless Stack)', 'Nuxt.js', 'SvelteKit'],
          },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
    ],
  },
]

export class StubWorkExperienceRepository implements IWorkExperienceRepository {
  list(): ResultAsync<WorkExperience[], Error> {
    return okAsync(workExperiences)
  }
}
