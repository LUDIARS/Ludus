# Ludus あそびの辞書 — OKF bundle

このbundleは、Notionの「ゲーム構造一覧 (テンプレート一覧)」から得たジャンル別の主要システムを、Ludusの辞書としてOKF化したものです。各Markdownファイルが1つの概念であり、通常のMarkdownリンクが知識グラフの辺になります。

## 構成

- ジャンル: 41
- タイトル事例: 11
- 主要システム: 301
- UX成果: 530
- ドメイン要素: 16
- Pictor候補: 6

## 入口

- [グラフスキーマ](./graph-schema.md)
- [Pictorの責務境界](./owners/pictor.md)
- [グラフDB投入用のProperty Graph JSON](./exports/property-graph.json)

## ジャンル

- [アクションゲーム](./genres/action.md)
- [プラットフォーマー](./genres/platformer.md)
- [シューティングゲーム(FPS/TPS)](./genres/shooter.md)
- [RPG(ロールプレイングゲーム)](./genres/rpg.md)
- [ストラテジー/シミュレーション](./genres/strategy-sim.md)
- [パズルゲーム](./genres/puzzle.md)
- [レーシングゲーム](./genres/racing.md)
- [格闘ゲーム](./genres/fighting.md)
- [サバイバルゲーム](./genres/survival.md)
- [ホラーゲーム](./genres/horror.md)
- [ローグライク/ローグライト](./genres/roguelike.md)
- [タワーディフェンス](./genres/tower-defense.md)
- [MOBA (Multiplayer Online Battle Arena)](./genres/moba.md)
- [メトロイドヴァニア](./genres/metroidvania.md)
- [ハックアンドスラッシュ](./genres/hack-and-slash.md)
- [放置系/アイドル/クリッカー](./genres/idle-clicker.md)
- [ガチャ/収集型RPG](./genres/gacha-rpg.md)
- [クラッシュ・オブ・クラン型(ストラテジー/クラン戦)](./genres/coc-strategy.md)
- [パズル&ドラゴンズ型(パズル+RPG)](./genres/puzzle-rpg.md)
- [リズムゲーム/音ゲー](./genres/rhythm.md)
- [デッキ構築型カードゲーム](./genres/deckbuilder.md)
- [オートバトラー](./genres/auto-battler.md)
- [街づくり/経営シミュレーション](./genres/city-builder.md)
- [アドベンチャーゲーム](./genres/adventure.md)
- [ビジュアルノベル／インタラクティブフィクション](./genres/visual-novel.md)
- [ライフシム／農場シム](./genres/life-sim.md)
- [スポーツゲーム](./genres/sports.md)
- [ボードゲーム／カードゲーム](./genres/board-card.md)
- [バトルロイヤル／エクストラクション](./genres/battle-royale.md)
- [シューティングゲーム（STG／SHMUP）](./genres/shmup.md)
- [オープンワールドゲーム](./genres/open-world.md)
- [ランナー／エンドレスラン](./genres/runner.md)
- [サバイバーライク](./genres/survivors-like.md)
- [弾きアクションRPG](./genres/pull-and-strike-rpg.md)
- [タクティカルシューター](./genres/tactical-shooter.md)
- [ヒーローシューター](./genres/hero-shooter.md)
- [クリーチャー収集](./genres/creature-collector.md)
- [ステルス](./genres/stealth.md)
- [ルーターシューター](./genres/looter-shooter.md)
- [非対称マルチプレイ](./genres/asymmetric-multiplayer.md)
- [MMORPG](./genres/mmorpg.md)

## タイトル事例

- [モンスターストライク](./cases/monster-strike.md)
- [Counter-Strike 2](./cases/counter-strike-2.md)
- [Apex Legends](./cases/apex-legends.md)
- [Palworld](./cases/palworld.md)
- [Assassin's Creed Black Flag Resynced](./cases/assassins-creed-black-flag-resynced.md)
- [Marvel Rivals](./cases/marvel-rivals.md)
- [Overwatch](./cases/overwatch.md)
- [MECCHA CHAMELEON](./cases/meccha-chameleon.md)
- [Warframe](./cases/warframe.md)
- [Dead by Daylight](./cases/dead-by-daylight.md)
- [EA SPORTS College Football 27](./cases/college-football-27.md)

## 生成元

- 原典: Notion「ゲーム構造一覧 (テンプレート一覧)」 (page id: `30453028-8e8d-805d-a922-f92949ebd575`)
- 変換元: `game-knowledge-graph` の `manifest.json` と `graph/*.json`
- Ludus補完: `spec/data/okf/ludus-play-supplement.json`
- Ludus補完: `spec/data/okf/ludus-steam-supplement.json`
- 生成器: `tools/import-game-knowledge-graph.mjs`
