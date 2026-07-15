---
type: "Ludus Gameplay System"
title: "装備購入とチーム経済"
description: "ラウンド間の通貨と装備選択で短期リスクと試合全体の計画を結ぶ。"
tags:
  - "ludus"
  - "gameplay-system"
  - "tactical-shooter"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:tactical-shooter:team-economy"
genre_id: "genre:tactical-shooter"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

ラウンド間の通貨と装備選択で短期リスクと試合全体の計画を結ぶ。

# 設計思想

経済差からの回復経路を残す。

# 主要機能

- 購入フェーズ
- 敗北補償
- 装備共有

# UXへの寄与

- [戦略性](../../ux/8ded4fcfb58a7e88.md)
- [連帯感](../../ux/d28e662e13e642e4.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [対人関係とセッション](../../domains/social-and-session.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [索敵とユーティリティ](./information-utility.md) の後に実装する。
