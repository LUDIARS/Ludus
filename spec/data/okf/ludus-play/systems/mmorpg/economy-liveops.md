---
type: "Ludus Gameplay System"
title: "経済とライブ運用"
description: "生産、取引、通貨供給、イベント、更新を長期的に管理する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "mmorpg"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:mmorpg:economy-liveops"
genre_id: "genre:mmorpg"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

生産、取引、通貨供給、イベント、更新を長期的に管理する。

# 設計思想

インフレ、供給独占、更新格差を観測可能にする。

# 主要機能

- 市場取引
- 通貨シンク
- 設定配信

# UXへの寄与

- [活気](../../ux/258a8124758e3d6e.md)
- [期待感](../../ux/91ca175d56b093ef.md)

# ドメイン要素

- [リソースと経済](../../domains/resources-and-economy.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ギルドと社会関係](./social-guild.md) の後に実装する。
