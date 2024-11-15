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
社内向けクライアント/サーバ型システムを開発。

- コーディング
- サーバ設置、クライアントPCへのデプロイまで担当。`,
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Windows Server', 'Windows'] },
          { genre: '言語・フレームワーク', stacks: ['Oracle DeveloperR6(PL/SQL)'] },
          { genre: 'データベース', stacks: ['Oracle 8i'] },
        ],
      },
      {
        title: 'ECサイト(B2C)構築および保守',
        termFrom: 2006,
        termTo: 2012,
        teamSize: 2,
        roles: ['メンバー'],
        responsibilities:
          '(1)システムの会員情報を参照する、会員制のECサイトを開発。フレームワークなどの技術選定、コーディングからサーバ設置まで担当。',
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
        responsibilities:
          '社内向けクライアント/サーバ型システムを開発。詳細設計からコーディング、サーバ設置、クライアントPCへのデプロイまで担当。',
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
        responsibilities:
          '他社開発のクーポンサイトの保守を引き継ぎ、追加開発を客先常駐で行う。要件定義、詳細設計、コーディング、サーバへのデプロイまで担当。',
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
        responsibilities:
          'Webサイトの一部をWebアプリに転換し、毎日値が変わる相場表の入力を省略化するWebアプリを構築。詳細設計からコーディング、サーバ設置まで担当。',
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
        responsibilities:
          '毎日Webサイトを巡回し記事を保存するクローラと、ため込んだ記事を検索するWebアプリを構築。詳細設計からコーディング、サーバ設置まで担当。また保守の一環としてパフォーマンス統計を毎週報告するため、可視化するSlack BotをPythonで作成。',
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
        responsibilities:
          'スマートフォンアプリのバックエンド開発と客先常駐での保守、そこから客先の別システムの保守作業まで伸びた実質SES案件。前者はコーディングと客先のサーバへのデプロイを担当、後者はデータベースのデータ整備、日次作業(データファイルの送受信など)を担当。',
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Windows Server'] },
          { genre: '言語・フレームワーク', stacks: ['Django(Python)'] },
          { genre: 'データベース', stacks: ['Microsoft SQL Server'] },
        ],
      },
      {
        title: 'レジシステム(2)保守および追加開発',
        termFrom: 2018,
        termTo: 2018,
        teamSize: 2,
        roles: ['メンバー'],
        responsibilities:
          '既存のWebアプリベースのレジシステムと自動釣銭機の連携部分を客先常駐で改修。追加開発も発生。原因調査とコーディングを担当。',
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['MacOS', '自動釣銭機'] },
          { genre: '言語・フレームワーク', stacks: ['PHP', 'jQuery(JavaScript)'] },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
      {
        title: 'ECサイト(B2C)バックエンド開発',
        termFrom: 2018,
        termTo: 2019,
        teamSize: 4,
        roles: ['メンバー', 'メンター'],
        responsibilities:
          '(2)のシステムを作っている会社が元請けとなったECサイト構築のバックエンド部分に参加。開発環境の構築やコーディング、クラウドベースの本番環境に対するデプロイ体制の構築を担当するほか、他の開発者への教育・指導の役も担当。',
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Ubuntu Linux', 'Docker', 'AWS'] },
          { genre: '言語・フレームワーク', stacks: ['Django REST Framework(Python)'] },
          { genre: 'データベース', stacks: ['PostgreSQL'] },
        ],
      },
      {
        title: '映像資産管理サイトバックエンド開発/インフラ構築',
        termFrom: 2019,
        termTo: 2019,
        teamSize: 4,
        roles: ['メンバー', 'メンター'],
        responsibilities:
          '動画・静止画などのリソースをAWSに移行し、招待制でリソースを限定公開するWebアプリの開発に参加。開発環境の構築やコーディング、他の開発者への教育・指導の役も担当する他、AWSの本番環境構築、GitHub Actionsを用いたCI環境の構築を担当。',
        techStacks: [
          { genre: 'OS・サーバ環境', stacks: ['Ubuntu Linux', 'Docker', 'AWS'] },
          { genre: '言語・フレームワーク', stacks: ['Django REST Framework(Python)'] },
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
