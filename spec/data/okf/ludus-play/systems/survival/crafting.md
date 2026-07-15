---
type: "Ludus Gameplay System"
title: "クラフト/製作システム"
description: "収集した素材を組み合わせて道具や装備を作り、生存能力を向上させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:crafting"
genre_id: "genre:survival"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

収集した素材を組み合わせて道具や装備を作り、生存能力を向上させる。

# 設計思想

『創造と進歩の統合』。レシピ全開示は目標明確だが驚きがなく、完全隠蔽は迷う。段階的開放 (木→石→鉄の道具) で明確な進行感を作る。

# 主要機能

- レシピシステム (必要素材と生成物の定義)
- レシピ発見 (素材入手/探索で解放)
- 作業台 (高度なアイテムは専用施設)
- 製作時間 (即座/待機時間)
- 品質システム (同レシピでも品質差)
- カテゴリ分類 (ツール/武器/防具/消耗品)

# UXへの寄与

- [成長の実感](../../ux/5fa21c6057d69105.md)
- [発見の喜び](../../ux/5d2998518e821199.md)
- [目標設定](../../ux/1f410818921a555e.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [インベントリ/重量管理](./inventory.md) の後に実装する。
