---
type: "Ludus Gameplay System"
title: "死亡/リスポーンシステム"
description: "死のペナルティを定義し、生存への緊張感を調整する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:death-respawn"
genre_id: "genre:survival"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

死のペナルティを定義し、生存への緊張感を調整する。

# 設計思想

『失敗のコスト設定』。ペナルティなしだと緊張感がなく、厳しすぎると挫折する。アイテム回収の猶予時間 (死後10分間など) で、取り返せる希望と時間制限の緊張を両立する。

# 主要機能

- 死亡条件 (体力0/飢餓/環境ハザード)
- アイテムロスト (所持品の一部/全部を失う)
- 死亡地点回収 (死んだ場所に戻って回収)
- リスポーン地点 (ベッド/拠点/ランダム)
- ペナルティの段階 (ハードコア=永久死〜カジュアル)
- ゴーストモード (死後にアイテム回収のみ可能)

# UXへの寄与

- [緊張感](../../ux/d3504ee04079ad32.md)
- [慎重なプレイ](../../ux/e21200574c6c3564.md)
- [回収のスリル](../../ux/612cc8f0441fda47.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [スキル/熟練度システム](./skill.md) の後に実装する。
